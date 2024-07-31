import { h } from "@stencil/core/internal";
import { AV_API_KEY } from "../../global/global";
export class StockFinder {
    constructor() {
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
    static get is() { return "uc-stock-finder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./stock-finder.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["stock-finder.css"]
        };
    }
    static get states() {
        return {
            "searchResults": {},
            "loading": {}
        };
    }
    static get events() {
        return [{
                "method": "ucSymbolSelected",
                "name": "ucSymbolSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=stock-finder.js.map
