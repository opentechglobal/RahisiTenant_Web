import language from '../../common/config/language.config';

import englishLang from '../../common/assets/images/flag/uk.svg';
import chineseLang from '../../common/assets/images/flag/china.svg';
import spanishLang from '../../common/assets/images/flag/spain.svg';
import frenchLang from '../../common/assets/images/flag/france.svg';
import italianLang from '../../common/assets/images/flag/italy.svg';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'chinese',
      locale: 'zh',
      text: 'Chinese',
      icon: chineseLang,
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
      icon: spanishLang,
    },
    {
      languageId: 'french',
      locale: 'fr',
      text: 'French',
      icon: frenchLang,
    },
    {
      languageId: 'italian',
      locale: 'it',
      text: 'Italian',
      icon: italianLang,
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
