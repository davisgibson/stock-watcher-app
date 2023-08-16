# Stock Watcher

## Notes from Davis:

 1. As of writing this, I have spent approximately an hour on this project.
 2. With such little time, my priorities were a balance of looks and functionality. This is why I skipped the graph portion altogether.
 3. As for looks, I prioritized the mobile view first. Refining tablet/desktop views is next on the TODO list.
 4. I'd like to do some more testing on this, but I'm sticking to the hour limit, so there will probably be bugs.
 5. If you run out of daily API calls, feel free to create a new API key [here].
 6. Thank you very much for your time!


## Overview:

Your task is to help complete a simple web application which allows a user to
add basic stock tickers to a dashboard.  To add a stock, the user enters the
symbol of their desired stock (e.g. `GOOG`, `AAPL`, or `TSLA`) into a text
field.  When the user clicks "Add Stock", the basic stock data is added to the
dashboard.


## Instructions:

Don't spend more than an hour or so.

Following the provided design mocks, address the tasks given and feel free to
rename, reorganize or restructure any code you think could use it.  Record any
questions you would have liked to ask a designer, product manager, or end user
at any point in the process.

Please mark off tasks you consider completed (put an `x` between the square
brackets in this README.md file).

To deliver your code, create a repo on GitHub (accounts are free) and email us a
link.

### Tasks
- [ ] Add any JS, CSS or HTML necessary to display the graph portion of the
    `StockQuoteCard` as shown in the design mocks.
- [x] Replace color values with variables from `./src/variables.scss`.
- [ ] Add styles to `./src/Main/main.scss` so that the application matches the design.
- [x] Complete the `mainView.on("stockSearch"...` callback function in `./src/index.js`
- [x] Alphavantage returns a 200 response even in the cases that the symbol
    input by the user is not found, or we've exceeded the max number of requests
    allowed - please handle these responses and any other unexpected response
    gracefully.
- [ ] Complete the `formatMoney` function in `./src/StockQuote/StockQuoteCard.js`
    to display a dollar-formatted value (e.g. `$90.10`).


## Setting up the environment:

-   To get started ensure that node version 14 or higher is installed on your
    computer. The instructions can be found at [nodejs.org].
-   Open a command window and navigate to the root directory of this project
    (the directory containing the `package.json` file) and run `npm install`.
-   Run `npm run build` to run webpack and create the dist folder.
-   Run `npm start` in order to start a server and view the running application.
-   If the application doesn't run at this point please contact us so we can fix
    it as soon as possible (that's out-of-scope for this work demo).


## What we look for:

-   Prioritization and handling of the tasks given.
-   Well-structured, semantic HTML.
-   Organized, well-named, modern CSS.
-   Organized JavaScript that’s easy to read.
-   A responsive realization of the provided design.
-   Handling of edge cases (e.g. What happens if the user attempts to add a
    stock symbol that doesn’t exist?).
-   Sensible git commits, which help us follow your thinking.


## What you'll need:

-   **API Docs:** <https://www.alphavantage.co/documentation/>
-   **Designs:** Available in the [design] folder.


[nodejs.org]: https://nodejs.org/en/
[design]: ./design
[here]: https://www.alphavantage.co/support/#api-key


