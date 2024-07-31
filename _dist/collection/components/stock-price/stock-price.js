import { h, Host } from "@stencil/core/internal";
import { AV_API_KEY } from "../../global/global";
export class StockPrice {
    constructor() {
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
    static get is() { return "uc-stock-price"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./stock-price.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stock-price.css"]
        };
    }
    static get properties() {
        return {
            "stockSymbol": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "stock-symbol",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "fetchedPrice": {},
            "stockUserInput": {},
            "stockInputValid": {},
            "error": {},
            "loading": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "stockSymbol",
                "methodName": "stockSymbolChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "ucSymbolSelected",
                "method": "onStockSymbolSelected",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=stock-price.js.map
