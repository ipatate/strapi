import get from 'lodash/get';

const i18nMiddleware = () => () => next => action => {
  if (action.type === 'ContentManager/ListView/SET_LIST_LAYOUT ') {
    if (get(action, 'contentType.pluginOptions.i18n.localized', false)) {
      if (action.initialParams.pluginOptions) {
        action.initialParams.pluginOptions.locale = 'en';
      } else {
        action.initialParams.pluginOptions = {
          locale: 'en',
        };
      }

      return next(action);
    }
  }

  return next(action);
};

export default i18nMiddleware;
