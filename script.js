const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, INR: 74.5, GBP: 0.73, JPY: 110.5 },
    EUR: { USD: 1.18, EUR: 1, INR: 88.0, GBP: 0.86, JPY: 129.5 },
    
    INR: { USD: 0.013, EUR: 0.011, INR: 1, GBP: 0.0098, JPY: 1.47 },
    GBP: { USD: 1.37, EUR: 1.16, INR: 101.5, GBP: 1, JPY: 150.2 },
    JPY: { USD: 0.009, EUR: 0.0077, INR: 0.68, GBP: 0.0067, JPY: 1 },
};

function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!amount || amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById("result").innerHTML = `
        ${amount} ${fromCurrency} = <strong>${convertedAmount} ${toCurrency}</strong>
    `;
}
