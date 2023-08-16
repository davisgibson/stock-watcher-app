const baseUrl = new URL('https://www.alphavantage.co/query');
const apiKey = 'BLMPVL35DRGDEJY1';

/**
 * Will only return the data from alphavantage if it contains the stock quote info.
 * Note that alphavantage only allows 5 api requests per minute up to 500 requests per day.
 * @param symbol
 * @returns {Promise<any>}
 */
export const getGlobalQuoteBySymbol = (symbol) => {
    if (typeof symbol !== 'string' || symbol.length < 1) {
        throw new Error("symbol must be a string with a length greater than 0")
    }

    return getApiData(symbol);
}

const getApiData = (symbol) => {
    let url = baseUrl
    url.search = new URLSearchParams({function: 'GLOBAL_QUOTE', symbol, 'apikey': apiKey} ).toString();

//     return `{
//     "01. symbol": "AAPL",
//     "02. open": "178.8800",
//     "03. high": "179.4800",
//     "04. low": "177.0500",
//     "05. price": "177.4500",
//     "06. volume": "43622593",
//     "07. latest trading day": "2023-08-15",
//     "08. previous close": "179.4600",
//     "09. change": "-2.0100",
//     "10. change percent": "-1.1200%"
// }`;

    return fetch(url.toString(), {method: 'GET'})
        .then(response => response.json())
        .then(x => x['Global Quote'] || {})
        .catch(error => console.warn(error));
}