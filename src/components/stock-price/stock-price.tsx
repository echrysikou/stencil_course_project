import { h, Component, State, Element, Prop, Watch, Listen, Host } from '@stencil/core/internal';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'uc-stock-price',
  styleUrl: './stock-price.css',
  shadow: true,
})
export class StockPrice {
  stockInput: HTMLInputElement;
  //   initialStockSymbol: string;

  @Element() el: HTMLElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;
  @State() loading = false;

  @Prop({ mutable: true, reflect: true }) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
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

  @Listen('ucSymbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent) {
    console.log('stock symbol selected Event:', event?.detail);
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }

  fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo`)
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${'OZ3LNOKZNTQSN782'}`)
      .then(resp => {
        return resp.json();
      })
      .then(parsedResp => {
        console.log('Parsed Response:', parsedResp);
        if (!parsedResp['Global Quote']?.['05. price']) {
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
    let dataContent = <p>Please enter a symbol</p>;

    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }

    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }

    if (this.loading) {
      dataContent = <uc-spinner></uc-spinner>;
    }

    return (
      <Host class={this.error ? 'error' : ''}>
        <form onSubmit={this.onFetchStockPrice.bind(this)} key={'form'}>
          {/* The ref below will give us direct access to the input */}
          <input id="stock-symbol" ref={el => (this.stockInput = el)} value={this.stockUserInput} onInput={this.onUserInput.bind(this)} />
          <button type="submit" disabled={!this.stockInputValid || this.loading}>
            Fetch
          </button>
        </form>
        <div key="divKey">{dataContent}</div>
      </Host>
    );
  }
}
