document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.querySelector("#amount");
    const firstOption = document.querySelector("#firstCurrencyOption");
    const secondOption = document.querySelector("#secondCurrencyOption");
    const resultInput = document.querySelector("#result");
    const resultSymbol = document.querySelector("#symbol");
    const currency = new Currency();

    // Event listener'ların eklenmesi
    runEventListener();

    function runEventListener() {
        amountInput.addEventListener("input", exchange);
        firstOption.addEventListener("change", exchange);
        secondOption.addEventListener("change", exchange);
    }

    function exchange() {
        const amount = Number(amountInput.value.trim());
        const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
        const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

        currency.exchange(amount, firstOptionValue, secondOptionValue)
            .then((result) => {
                resultInput.value = result.toFixed(3);
            })
            .catch(error => console.error("Döviz kuru alınamadı: ", error));

        currency.findSymbol(secondOptionValue)
            .then((result) => {
                console.log("result: " + result);
                resultSymbol.value = result;
            })
            .catch(error => console.error("Döviz sembolü alınamadı: ", error));
    }
});
