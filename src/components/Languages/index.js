import React from 'react';
import { navigate } from "gatsby";
import { useLocale } from '../../hooks/locale';
import useLanguageMapping from '../useLanguageMapping';
import locales from '../../../config/i18n';

import * as S from './styled';

const Languages = () => {
  // Grab the locale (passed through context) from the Locale Provider 
  // through useLocale() hook
  const { locale } = useLocale();

  const languageMapping = useLanguageMapping();

  function handleClickLanguage(e, lang) {
    e.preventDefault();
    if (locale === lang) return;

    let url;
    if (window.location.pathname.split("/")[1] in locales) { // always will have 2 elements so we are fine indexing with 1
      url = window.location.pathname.substring(3); // cut off 2 letter locale and slash
    } else {
      url = window.location.pathname;
    }

    if (!url || url === '/') return locales[lang].default ?
      navigate(`/`) :
      navigate(`/${lang}`);

    const associatedUrls = languageMapping.find(item => {
      let hasUrl = false;

      Object.values(item).forEach((value) => {
        if (value === url) return hasUrl = true;
      });

      return hasUrl
    });

    let translatedUrl;
    if (associatedUrls) {
      translatedUrl = associatedUrls[lang];
    } else {
      translatedUrl = url;
    }

    return locales[lang].default ?
      navigate(`${translatedUrl}`) :
      navigate(`/${lang}${translatedUrl}`);
  }

  return (
    <S.LanguageWrapper>
      {Object.keys(locales).map((loc) => (
        <S.LanguageItem key={loc}>
          <S.LanguageLink
            to="/"
            onClick={(e) => handleClickLanguage(e, loc)}
            className={locale === loc ? 'is-active' : ''}
          >
            {loc.toUpperCase()}
          </S.LanguageLink>
        </S.LanguageItem>
      ))}
    </S.LanguageWrapper>
  );
};

export default Languages;
