const formulario = document.querySelector('#Registro_vendas');
const idProduto = document.querySelector('#id_produto');
const valorProduto = document.querySelector('#valor');
date = new Date().toLocaleDateString();

const url_API = "http://localhost:5000/Product/List?Product_ID"

const variavel_teste = document.getElementById('id_produto')
const descricao = document.getElementsByClassName('descricao')

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const idDoProduto = variavel_teste.value;
    try {
        capturaValorProduto(idDoProduto);    
    } catch(err){
        window.alert("Produto não cadastrado!")
    } 
});  

//host da API
//Realiza a captação de dados da API

const capturaValorProduto = async(idDoProduto) => {  

    const apiID = "http://localhost:5000/Product/List?Product_ID=".concat(idDoProduto)
    const resultado = await fetch(apiID);
    const data = await resultado.json();
    
    console.log(data)
    document.getElementById('Data_venda').value = String(date)
    console.log(date)
    console.log(data['description'])
    document.getElementById('descricao').value = data['description']
    return data

};



 



