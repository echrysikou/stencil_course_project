import { EventEmitter } from '../../stencil-public-runtime';
export declare class StockFinder {
    stockNameInput: HTMLInputElement;
    searchResults: {
        symbol: string;
        name: string;
    }[];
    loading: boolean;
    ucSymbolSelected: EventEmitter<string>;
    onfindStocks(event: Event): void;
    onSelectSymbol(symbol: string): void;
    render(): any[];
}
