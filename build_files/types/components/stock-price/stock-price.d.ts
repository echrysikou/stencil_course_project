export declare class StockPrice {
    stockInput: HTMLInputElement;
    el: HTMLElement;
    fetchedPrice: number;
    stockUserInput: string;
    stockInputValid: boolean;
    error: string;
    loading: boolean;
    stockSymbol: string;
    stockSymbolChanged(newValue: string, oldValue: string): void;
    onUserInput(event: Event): void;
    onFetchStockPrice(event: Event): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    onStockSymbolSelected(event: CustomEvent): void;
    fetchStockPrice(stockSymbol: string): void;
    render(): any;
}
