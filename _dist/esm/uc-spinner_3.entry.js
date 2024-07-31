import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './index-4111912d.js';

const sinnerCss = ".lds-ring,.lds-ring div{box-sizing:border-box}.lds-ring{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid purple;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:purple transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const UcSpinnerStyle0 = sinnerCss;

const Spinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '23e62d55359b0a01622678db119254b629fe0534' }, h("div", { key: 'ce8e610e2aa2669840151fa9e6520719cc721d55', class: "lds-ring" }, h("div", { key: 'e08cc0f371ddb1a496eb12afb3efeb7c6b50a652' }), h("div", { key: 'df4068bf815e2b035dff677ae716e6e3a72b8115' }), h("div", { key: '4785d38af3b77ade0b9cdb99bf0f82f72bd4bf76' }), h("div", { key: 'abe26581838cd6abc1217bbe0bc76762bed519ac' }))));
    }
};
Spinner.style = UcSpinnerStyle0;

// export const AV_API_KEY = '0FISW32XJ1QDTODS';
// export const AV_API_KEY = '1XOFQTEEOIV9NRAM';
const AV_API_KEY = 'OZ3LNOKZNTQSN782';

const stockFinderCss = ":host{font-family:sans-serif;border:2px solid var(--color-primary, black);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--color-primary, black);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--color-primary, black);background-color:var(--color-primary, black);color:var(--color-primary-inverse,white);cursor:pointer}form button:hover,form button:active{background-color:var(--color-primary-highlight, grey);border-color:var(--color-primary-highlight, grey)}form button[disabled]{background-color:lightgray;border-color:lightgray;color:white;cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{margin:0.25rem;padding:0.5rem;border:1px solid #ccc;cursor:pointer}li:hover,li:active{background-color:var(--color-primary, black);color:var(--color-primary-inverse, white)}";
const UcStockFinderStyle0 = stockFinderCss;

const StockFinder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ucSymbolSelected = createEvent(this, "ucSymbolSelected", 7);
        this.searchResults = [];
        this.loading = false;
    }
    onfindStocks(event) {
        event.preventDefault();
        this.loading = true;
        const stockName = this.stockNameInput.value;
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
            .then(res => res.json())
            .then(parsedResp => {
            var _a;
            console.log('parsedResp', parsedResp);
            parsedResp = {
                bestMatches: [
                    {
                        '1. symbol': 'BA',
                        '2. name': 'Boeing Company',
                        '3. type': 'Equity',
                        '4. region': 'United States',
                        '5. marketOpen': '09:30',
                        '6. marketClose': '16:00',
                        '7. timezone': 'UTC-04',
                        '8. currency': 'USD',
                        '9. matchScore': '1.0000',
                    },
                    {
                        '1. symbol': 'BAB',
                        '2. name': 'INVESCO TAXABLE MUNICIPAL BOND ETF ',
                        '3. type': 'ETF',
                        '4. region': 'United States',
                        '5. marketOpen': '09:30',
                        '6. marketClose': '16:00',
                        '7. timezone': 'UTC-04',
                        '8. currency': 'USD',
                        '9. matchScore': '0.8000',
                    },
                    {
                        '1. symbol': 'BA.LON',
                        '2. name': 'BAE Systems plc',
                        '3. type': 'Equity',
                        '4. region': 'United Kingdom',
                        '5. marketOpen': '08:00',
                        '6. marketClose': '16:30',
                        '7. timezone': 'UTC+01',
                        '8. currency': 'GBX',
                        '9. matchScore': '0.6667',
                    },
                    {
                        '1. symbol': 'BABA',
                        '2. name': 'Alibaba Group Holding Ltd',
                        '3. type': 'Equity',
                        '4. region': 'United States',
                        '5. marketOpen': '09:30',
                        '6. marketClose': '16:00',
                        '7. timezone': 'UTC-04',
                        '8. currency': 'USD',
                        '9. matchScore': '0.6667',
                    },
                    {
                        '1. symbol': 'BA3.FRK',
                        '2. name': 'Brooks Automation Inc',
                        '3. type': 'Equity',
                        '4. region': 'Frankfurt',
                        '5. marketOpen': '08:00',
                        '6. marketClose': '20:00',
                        '7. timezone': 'UTC+02',
                        '8. currency': 'EUR',
                        '9. matchScore': '0.5714',
                    },
                    {
                        '1. symbol': 'BAAPX',
                        '2. name': 'BlackRock Aggressive GwthPrprdPtfInvstrA',
                        '3. type': 'Mutual Fund',
                        '4. region': 'United States',
                        '5. marketOpen': '09:30',
                        '6. marketClose': '16:00',
                        '7. timezone': 'UTC-04',
                        '8. currency': 'USD',
                        '9. matchScore': '0.5714',
                    },
                    {
                        '1. symbol': 'BAAAAX',
                        '2. name': 'Building America Strategy Port CDA USD Ser 21/1Q MNT CASH',
                        '3. type': 'Mutual Fund',
                        '4. region': 'United States',
                        '5. marketOpen': '09:30',
                        '6. marketClose': '16:00',
                        '7. timezone': 'UTC-04',
                        '8. currency': 'USD',
                        '9. matchScore': '0.5000',
                    },
                    {
                        '1. symbol': 'BAAAFX',
                        '2. name': 'Building America Strgy Portf CDA USD Ser 2022/2Q MNT CASH',
                        '3. type': 'Mutual Fund',
                        '4. region': 'United States',
                        '5. marketOpen': '09:30',
                        '6. marketClose': '16:00',
                        '7. timezone': 'UTC-04',
                        '8. currency': 'USD',
                        '9. matchScore': '0.5000',
                    },
                    {
                        '1. symbol': 'BAB3.LON',
                        '2. name': 'Leverage Shares 3x Alibaba ETP Securities',
                        '3. type': 'ETF',
                        '4. region': 'United Kingdom',
                        '5. marketOpen': '08:00',
                        '6. marketClose': '16:30',
                        '7. timezone': 'UTC+01',
                        '8. currency': 'USD',
                        '9. matchScore': '0.5000',
                    },
                    {
                        '1. symbol': 'BAAX39.SAO',
                        '2. name': 'Ishares Msci All Country Asia Ex Japan ETF',
                        '3. type': 'ETF',
                        '4. region': 'Brazil/Sao Paolo',
                        '5. marketOpen': '10:00',
                        '6. marketClose': '17:30',
                        '7. timezone': 'UTC-03',
                        '8. currency': 'BRL',
                        '9. matchScore': '0.3636',
                    },
                ],
            };
            this.searchResults = (_a = parsedResp['bestMatches']) === null || _a === void 0 ? void 0 : _a.map(match => {
                return {
                    name: match['2. name'],
                    symbol: match['1. symbol'],
                };
            });
            this.loading = false;
        })
            .catch(err => {
            console.log('error:', err);
            this.loading = false;
        });
    }
    onSelectSymbol(symbol) {
        this.ucSymbolSelected.emit(symbol);
    }
    render() {
        let content = (h("ul", { key: '49fc1e3d388693dce911d709b4c0902680868388' }, ' ', this.searchResults.map(result => (h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, h("strong", null, result.symbol), " - ", result.name)))));
        if (this.loading) {
            content = h("uc-spinner", { key: '9e15f9f35f9724b4b1c8a67c6fe3fc81f637842a' });
        }
        return [
            h("form", { onSubmit: this.onfindStocks.bind(this), key: 'form' }, h("input", { key: 'fcdb2f0756ac753711d3c00bb343ede84b4131c2', id: "stock-symbol", ref: el => (this.stockNameInput = el) }), h("button", { key: '451ea426fec49f0e2d924a35998382da680f3863', type: "submit" }, "Find!")),
            content,
        ];
    }
};
StockFinder.style = UcStockFinderStyle0;

const stockPriceCss = ":host{font-family:sans-serif;border:2px solid purple;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:orange}form input{font:inherit;color:purple;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid purple;background-color:purple;color:white;cursor:pointer}form button:hover,form button:active{background-color:lightpink;border-color:#750175}form button[disabled]{background-color:lightgray;border-color:lightgray;color:white;cursor:not-allowed}";
const UcStockPriceStyle0 = stockPriceCss;

const StockPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchedPrice = undefined;
        this.stockUserInput = undefined;
        this.stockInputValid = false;
        this.error = undefined;
        this.loading = false;
        this.stockSymbol = undefined;
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.stockInputValid = true;
            this.fetchStockPrice(newValue);
        }
    }
    onUserInput(event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== '') {
            this.stockInputValid = true;
        }
        else {
            this.stockInputValid = false;
        }
    }
    onFetchStockPrice(event) {
        event.preventDefault();
        // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement)?.value;
        this.stockSymbol = this.stockInput.value;
        // this.fetchStockPrice(stockSymbol);
        console.log('submitted', AV_API_KEY);
    }
    //   runs before render()
    componentWillLoad() {
        console.log('componentWillLoad', this.stockSymbol);
    }
    componentDidLoad() {
        console.log('componentDidLoad', this.stockSymbol);
        if (this.stockSymbol) {
            // this.initialStockSymbol = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }
    componentWillUpdate() {
        console.log('componentWillUpdate', this.stockSymbol);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate', this.stockSymbol);
        // if (this.stockSymbol !== this.initialStockSymbol) {
        //     this.initialStockSymbol= this.stockSymbol;
        //     this.fetchStockPrice(this.stockSymbol);
        // }
    }
    disconnectedCallback() {
        console.log('disconnectedCallback', this.stockSymbol);
    }
    onStockSymbolSelected(event) {
        console.log('stock symbol selected Event:', event === null || event === void 0 ? void 0 : event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
        }
    }
    fetchStockPrice(stockSymbol) {
        this.loading = true;
        // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo`)
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${'OZ3LNOKZNTQSN782'}`)
            .then(resp => {
            return resp.json();
        })
            .then(parsedResp => {
            var _a;
            console.log('Parsed Response:', parsedResp);
            if (!((_a = parsedResp['Global Quote']) === null || _a === void 0 ? void 0 : _a['05. price'])) {
                throw new Error('Invalid symbol');
            }
            this.error = null;
            // parsedResp = {
            //     "Global Quote": {
            //         "01. symbol": "MSFT",
            //         "02. open": "431.5800",
            //         "03. high": "432.1500",
            //         "04. low": "424.7042",
            //         "05. price": "426.7300",
            //         "06. volume": "15125836",
            //         "07. latest trading day": "2024-07-29",
            //         "08. previous close": "425.2700",
            //         "09. change": "1.4600",
            //         "10. change percent": "0.3433%"
            //     }
            // }
            this.fetchedPrice = +parsedResp['Global Quote']['05. price'];
            this.loading = false;
        })
            .catch(err => {
            console.log('error:', err);
            this.error = err.message;
            this.fetchedPrice = null;
            this.loading = false;
        });
    }
    //   hostData() {
    //     return {
    //         class: this.error ? 'error' : '',
    //         // style: 'background: red'
    //     }
    //   }
    render() {
        let dataContent = h("p", { key: '5289390e82c513b78772cae6a87225791494b2d2' }, "Please enter a symbol");
        if (this.error) {
            dataContent = h("p", { key: 'f6c1ef22a6fd3c8668129d2267265277dc0eacf5' }, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = h("p", { key: 'e57edb96b19cf463ec8f99cfe5d9a067880fff4f' }, "Price: $", this.fetchedPrice);
        }
        if (this.loading) {
            dataContent = h("uc-spinner", { key: 'da4876640749b8f108a0875f49e75d09236aadfa' });
        }
        return (h(Host, { key: '20dfa2d163c813c96a30448b431167475235b71e', class: this.error ? 'error' : '' }, h("form", { onSubmit: this.onFetchStockPrice.bind(this), key: 'form' }, h("input", { key: '13f1e957a8a8a595e780cea3ee95b14f5ab7752c', id: "stock-symbol", ref: el => (this.stockInput = el), value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), h("button", { key: '4fea39dc57f6d6c769a331c22e5730b1dc4ec038', type: "submit", disabled: !this.stockInputValid || this.loading }, "Fetch")), h("div", { key: "divKey" }, dataContent)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
};
StockPrice.style = UcStockPriceStyle0;

export { Spinner as uc_spinner, StockFinder as uc_stock_finder, StockPrice as uc_stock_price };

//# sourceMappingURL=uc-spinner_3.entry.js.map