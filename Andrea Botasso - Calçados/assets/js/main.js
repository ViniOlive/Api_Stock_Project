const formulario = document.querySelector('#Registro_vendas');
const idProduto = document.querySelector('#id_produto');
const valorProduto = document.querySelector('#valor');
const quantidade = document.querySelector('#Quantidade');


const url_API = "http://localhost:5000/Product/List?Product_ID"

const variavel_teste = document.getElementById('id_produto')

formulario.addEventListener("submit", (e) => {  
    
    e.preventDefault();
    const idDoProduto = variavel_teste.value;

    if (quantidade.value <=0){
        alert('Informe uma quantidade valida!')


    } else if(quantidade.value != Number(quantidade.value)){
        alert('Informe uma quantidade valida!')
    }  
    else{

        try {
            capturaValorProduto(idDoProduto);      
        
        } catch(err){
            window.alert("Produto não cadastrado!")
        } 

    }       
      
});  
//Realiza a captação de dados da API

const capturaValorProduto = async(variavel_teste) => {  

    try{
 
    const apiID = "http://localhost:5000/Product/List?Product_ID=".concat(variavel_teste);

    const resultado = await fetch(apiID);
    const data = await resultado.json();
    
    console.log(data)
    
    console.log(data['description'])
    const description = document.getElementById('descricao').value = data['description']
    const valor = document.getElementById('valor').value = `R$: ${data['value'] * quantidade.value} `
    
    

    }catch(err){
        window.alert("Produto não cadastrado!")
    };
};


