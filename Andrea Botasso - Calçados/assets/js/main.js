const formulario = document.querySelector('#Registro_vendas');
const idProduto = document.querySelector('#id_produto');
const valorProduto = document.querySelector('#valor');
const quantidade = document.querySelector('#Quantidade');
date = new Date().toISOString().slice(0, 10)
const variavel_teste = document.getElementById('id_produto')

const requestApi = async(productID) => {
    const apiID = "http://localhost:5000/Product/List?Product_ID=".concat(productID);
    const resultado = await fetch(apiID);
    const data = resultado.json();
    return data
};

idProduto.addEventListener("blur", e => {
    e.preventDefault();
    const idDoProduto = variavel_teste.value;
    if (idProduto){
        try {
            capturaValorProduto(idDoProduto);
        } catch(err){
            window.alert("Produto não cadastrado!")
        }
        }
    else{
        alert("Informe um número de produto valido.")
    }

});  

quantidade.addEventListener("blur", e => {
    e.preventDefault();
     if (quantidade.value <=0){
            alert('Informe uma quantidade valida!')
        } else if(quantidade.value != Number(quantidade.value)){
            alert('Informe uma quantidade valida!')
        }
        else{
            document.getElementById('valor').value = `R$: ${quant * quantidade.value}`
        }
});
//Realiza a captação de dados da API
const capturaValorProduto = product => {
    try{
        const data = requestApi(product)

        console.log(data.)
//        document.getElementById('descricao').value = data['description']
//        document.getElementById('valor').value = `R$: ${data['value']}`
//        document.getElementById('Data_venda').value = String(date)
    }catch(err){
        window.alert("Produto não cadastrado!")
    };
};

