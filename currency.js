class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_4FQDrpwzP7HWFw37oT89Z4kqUa3jMdNGuTM73V0O&base_currency=";

    }
    async exchange(amount , firstCurrency , secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const data = await  response.json(); 
        console.log(data)
         
     }
}