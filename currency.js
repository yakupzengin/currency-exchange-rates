class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_4FQDrpwzP7HWFw37oT89Z4kqUa3jMdNGuTM73V0O&base_currency=";
        this.symbolURL = "https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_4FQDrpwzP7HWFw37oT89Z4kqUa3jMdNGuTM73V0O&currencies="
    }


    async exchange(amount , firstCurrency , secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await  response.json(); 
        
        const symbol = await this.findSymbol(secondCurrency)
        console.log(symbol)
        const exchangedResult = (amount * result.data[secondCurrency])  ;
        return exchangedResult ;
     }

     async findSymbol(secondCurrency) {
        const response = await fetch(`${this.symbolURL}${secondCurrency}`);
        const result = await response.json();
        const symbol = result.data[secondCurrency].symbol;
        return symbol;
     }

}