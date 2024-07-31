import { h, Component, State, Event, EventEmitter } from '@stencil/core/internal';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'uc-stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @State() searchResults: { symbol: string; name: string }[] = [];
  @State() loading = false;

  @Event({ bubbles: true, composed: true }) ucSymbolSelected: EventEmitter<string>;

  onfindStocks(event: Event) {
    event.preventDefault();
    this.loading = true;
    const stockName = this.stockNameInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedResp => {
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

        this.searchResults = parsedResp['bestMatches']?.map(match => {
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

  onSelectSymbol(symbol: string) {
    this.ucSymbolSelected.emit(symbol);
  }
  render() {
    let content = (
      <ul>
        {' '}
        {this.searchResults.map(result => (
          <li onClick={this.onSelectSymbol.bind(this, result.symbol)}>
            <strong>{result.symbol}</strong> - {result.name}
          </li>
        ))}
      </ul>
    );

    if (this.loading) {
      content = <uc-spinner></uc-spinner>;
    }
    return [
      <form onSubmit={this.onfindStocks.bind(this)} key={'form'}>
        {/* The ref below will give us direct access to the input */}
        <input id="stock-symbol" ref={el => (this.stockNameInput = el)} />
        <button type="submit">Find!</button>
      </form>,
       content ,
    ];
  }
}
