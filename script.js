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


// Manipulando o input "amount" para receber somente números
amount.addEventListener("input",() => {
    // console.log(amount.value)
    const regexCharacter = /\D+/g // expressão regular para receber somente números
    amount.value = amount.value.replace(regexCharacter, "")
})

// Captando o evento de submit (enviar) do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch(currency.value) {
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

  
    // console.log(amount.value)
    // console.log(currency.value)
    
    
    

})


// Função para converter a moeda
function convertCurrency(amount,price,symbol) {

    

    
    try {

      description.textContent = `${symbol},1 = ${price}`




    // Aplica a classe que exibe o footer para mostrar o resultado
      footer.classList.add("show-result")



    // Remove a classe do footer removendo ele da tela 
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("[ERRO] Não foi possivel converter, tente novamente.")
        
    }
    

}
