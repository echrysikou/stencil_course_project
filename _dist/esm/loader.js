import { b as bootstrapLazy } from './index-4111912d.js';
export { s as setNonce } from './index-4111912d.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["uc-spinner_3",[[1,"uc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"uc-stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[16,"ucSymbolSelected","onStockSymbolSelected"]],{"stockSymbol":["stockSymbolChanged"]}],[1,"uc-spinner"]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map