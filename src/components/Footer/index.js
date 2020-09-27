import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';
import LocalizedLink from '../LocalizedLink';

import * as S from './styled';

const Footer = () => {
  const {
    maintainedBy,
    giveFeedback
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {maintainedBy}{' '}
          2020-2022 BTV. 
        </p>
        <p>
          {giveFeedback}{': '}
          <LocalizedLink to='/contact'>Contact Page</LocalizedLink>
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
