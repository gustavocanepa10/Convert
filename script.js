// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08



// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input "amount" para receber somente números
amount.addEventListener("input", (event) => {
    const regexCharacter = /\D+/g // expressão regular para receber somente números
    amount.value = amount.value.replace(regexCharacter, "")
    console.log(amount.value)
})
    


// Captando o evento de submit (enviar) do formulário

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(currency.value)




    switch(currency.value) {  // amount, coinprice e symbol
        case "USD":
            convertCurrency(amount.value, USD, "US$") 
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }

})


    

  
    // console.log(amount.value)
    // console.log(currency.value)
    
    
    




// Função para converter a moeda
function convertCurrency(amount,coinprice,symbol) {

    // A lógica por trás desse try-catch é:
    // se a conversão for bem sucedida o try adiciona a classe com o footer do resultado
    // se não der certo o catch remove a classe e informa uma mensagem de erro

    
    try {
        

        // Exibindo o conteúdo do valor exibido pelo footer
       description.textContent = `${symbol} 1 = ${formatCurrencyBRL(coinprice)}`
        
        // calcula o total
        let total = amount * coinprice
        
        // Formatar o valor total.
        total = formatCurrencyBRL(total).replace("R$", "")

        // exibe o total
        result.textContent = `${total} Reais`

        

        

      




    // Aplica a classe que exibe o footer para mostrar o resultado
      footer.classList.add("show-result")



    // Remove a classe do footer removendo ele da tela 
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("[ERRO] Não foi possivel converter, tente novamente.")
        
    }
    

}


// Função que formata o coinprice em moeda real brasileiro
function formatCurrencyBRL(value) {
    // Converte para Number o value
    // ToLocalString nesse caso formata e retorna a moeda em real, 
    // define o estilo que é currency
    // e o tipo de currency, que é "BRL" 
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"

    })

}
