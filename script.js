const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = Number(
  document.querySelector(".input-currency").value
    .replace(/\./g, "")   
    .replace(",", ".")
)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor há converter em real
    const currencyValueConverted = document.querySelector(".currency-value-convert")// Valor convertido em outra moeda

    const dolarToday = 5.2
    const euroToday = 6.3
    const libraToday = 6.8
    const bitcoin = 334.4

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    
    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    
    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP" 
        }).format(inputCurrencyValue / libraToday)
    }
    
    if(currencySelect.value == "bitcoin") {
        const btcValue = (inputCurrencyValue / bitcoin).toFixed(8)
        currencyValueConverted.innerHTML = `₿ ${btcValue}`
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".image-convert")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dollar.png"
    }
   
    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
   
    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }
    
    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)