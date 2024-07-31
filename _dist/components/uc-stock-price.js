import { p as proxyCustomElement, H } from './p-b1b71d4e.js';
import { d as defineCustomElement$2, h, H as Host } from './p-ddafe4ec.js';
import { A as AV_API_KEY } from './p-e4d7d40c.js';

const stockPriceCss = ":host{font-family:sans-serif;border:2px solid purple;margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:orange}form input{font:inherit;color:purple;padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid purple;background-color:purple;color:white;cursor:pointer}form button:hover,form button:active{background-color:lightpink;border-color:#750175}form button[disabled]{background-color:lightgray;border-color:lightgray;color:white;cursor:not-allowed}";
const UcStockPriceStyle0 = stockPriceCss;

const StockPrice = /*@__PURE__*/ proxyCustomElement(class StockPrice extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get el() { return this; }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
    static get style() { return UcStockPriceStyle0; }
}, [1, "uc-stock-price", {
        "stockSymbol": [1537, "stock-symbol"],
        "fetchedPrice": [32],
        "stockUserInput": [32],
        "stockInputValid": [32],
        "error": [32],
        "loading": [32]
    }, [[16, "ucSymbolSelected", "onStockSymbolSelected"]], {
        "stockSymbol": ["stockSymbolChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["uc-stock-price", "uc-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "uc-stock-price":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, StockPrice);
            }
            break;
        case "uc-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const UcStockPrice = StockPrice;
const defineCustomElement = defineCustomElement$1;

export { UcStockPrice, defineCustomElement };

//# sourceMappingURL=uc-stock-price.js.map