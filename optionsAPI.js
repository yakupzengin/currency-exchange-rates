
document.addEventListener('DOMContentLoaded', function () {
    // HTTP request to retrieve data from the API
    fetch('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_4FQDrpwzP7HWFw37oT89Z4kqUa3jMdNGuTM73V0O')
        .then(response => response.json())
        .then(data => {
            const currencies = data.data;
            const firstCurrencyOption = document.getElementById('firstCurrencyOption');
            const secondCurrencyOption = document.getElementById('secondCurrencyOption');

            // Add currency names to firstCurrencyOption
            for (const currencyCode in currencies) {
                const option = document.createElement('option');
                option.value = currencyCode;
                option.text = currencies[currencyCode].code;
                firstCurrencyOption.appendChild(option);
            }

            // Add currency names to secondCurrencyOption
            for (const currencyCode in currencies) {
                const option = document.createElement('option');
                option.value = currencyCode;
                option.text = currencies[currencyCode].code;
                secondCurrencyOption.appendChild(option);
            }

            // Event listener for both select elements
            firstCurrencyOption.addEventListener('change', exchange);
            secondCurrencyOption.addEventListener('change', exchange);
        })
        .catch(error => label('API isteği başarısız: ', error));

    // Exchange function
    function exchange() {
        const amount = Number(amountInput.value.trim());
        const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
        const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

        currency.exchange(amount, firstOptionValue, secondOptionValue)
            .then((result) => {
                resultInput.value = result.toFixed(3);
            });
    }
});
