import extendCTBInitialDataMiddleware from './extendCTBInitialDataMiddleware';
import extendCTBAttributeInitialDataMiddleware from './extendCTBAttributeInitialDataMiddleware';
import i18nMiddleware from './localeQueryParamsMiddleware'


const middlewares = [
  extendCTBInitialDataMiddleware,
  extendCTBAttributeInitialDataMiddleware,
  i18nMiddleware,
];

export default middlewares;
