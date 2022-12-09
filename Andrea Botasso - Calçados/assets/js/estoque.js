const formulario_estoque = document.querySelector('#Registro_de_estoque');
const id_do_produto_estoque = document.querySelector('#id_produto_estoque');
const valor_produto_estoque = document.querySelector('#valor_produto_estoque');
const quantidade_estoque = document.querySelector('#Quantidade_estoque');

url_API = "http://localhost:5000/Product/List?Product_ID";

const valor_id_produto = id_do_produto_estoque.value

const variavel_teste = document.getElementById('id_produto_estoque')


formulario_estoque.addEventListener("submit", (e) => {
    e.preventDefault();

    const idDoProduto = variavel_teste.value;

    if (quantidade_estoque.value <= 0){
        alert('Informe uma quantidade valida!')
    }else if (quantidade_estoque.value != Number(quantidade_estoque.value)){
        alert('Informe uma quantidade valida!')
    }else{

        try{
            capturaInfoProduto(idDoProduto);
        }catch(err){
            alert('PRODUTO JÁ CADASTRADO')
        }

    };

});


const capturaInfoProduto = async(variavel_test) => {


    try{
        const apiID = "http://localhost:5000/Product/List?Product_ID=".concat(variavel_teste);

        console.log['description']

        const resultado = await fetch(apiID);
        const data = await resultado(JSON);

        const descricao = document.getElementById('descricao_produto_estoque').value = data['description'];
        const valor = document.getElementById('valor_produto_estoque').value = data['value'];

        console.log(data)
    }catch(err){
        alert('PRODUTO NÃO CADASTRADO')
    }
}