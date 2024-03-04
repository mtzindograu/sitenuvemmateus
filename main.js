function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    document.getElementById("dados").innerText = ""
    document.getElementById("dados").innerText += `DDD: ${conteudo.ddd}\n`;
    document.getElementById("dados").innerText += `Logradouro: ${conteudo.logradouro}\n`;
    document.getElementById("dados").innerText += `Bairro: ${conteudo.bairro}\n`;
    document.getElementById("dados").innerText += `Cidade: ${conteudo.localidade}\n`;
    document.getElementById("dados").innerText += `IBGE: ${conteudo.ibge}\n`;
    document.getElementById("dados").innerText += `Estado: ${conteudo.uf}\n`;
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep() {
let valor = document.getElementById('pesquisaCep').value;

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        document.getElementById("dados").innerText = "..."
        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};