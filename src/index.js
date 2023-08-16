import MainView from './Main/MainView';
import Marionette from 'backbone.marionette';
import './style.scss';
import { getGlobalQuoteBySymbol } from './StockQuote/StockQuoteService';
import {
    createFromGlobalQuote,
    StockQuoteCollection,
    isQuoteEmpty,
} from './StockQuote/StockQuoteModel';
import { StockQuoteCollectionView } from './StockQuote/StockQuoteCollectionView';

document.addEventListener('DOMContentLoaded', () => {

    // SETUP
    const StockWatcherApp = new Marionette.Application();
    StockWatcherApp.start();

    const mainView = new MainView()
    mainView.render();

    const stockQuoteCollection = new StockQuoteCollection()

    const globalQuotes = Promise.all(
        ['IBM', 'AAPL']
            .map(getGlobalQuoteBySymbol)
    )
        .then(globalQuotes => addInitialQuotesToCollection(globalQuotes));

    var StocksView = new StockQuoteCollectionView({
        el: '#stock-quotes', 
        collection: stockQuoteCollection, 
    }).render();

    const addNewQuoteToCollection = (globalQuote) => {
        if(isQuoteEmpty(globalQuote))
            return alert('Stock symbol is not valid. Try again with a valid stock symbol');
        stockQuoteCollection.add(createFromGlobalQuote(globalQuote));
    }

    const addInitialQuotesToCollection = (globalQuotesArray) => {
        // there is probably a better way to check if the initial data is empty
        if(isQuoteEmpty(globalQuotesArray[0]))
            return alert('Looks like you\'ve ran out of API calls for now. Try again later.');
        globalQuotesArray.forEach(function(index, quote) {
            addNewQuoteToCollection(quote);
        });
    }

    mainView.on('stockSearch', function(e) {
        const searchSymbol = e.symbol;
        const newGlobalQuote = new Promise(function(resolve, reject) {
            resolve(getGlobalQuoteBySymbol(searchSymbol));
        }).then(newGlobalQuote => addNewQuoteToCollection(newGlobalQuote))
        .catch(error => alert(error));
    });
});
