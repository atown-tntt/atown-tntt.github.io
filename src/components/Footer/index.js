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
        <S.SmallText>
          <p>
            <strong>The Vietnamese Eucharistic Youth Movement in the U.S.A.</strong><br />
            <strong>Phong Trào Thiếu Nhi Thánh Thể Việt Nam tại Hoa Kỳ</strong><br />
            Ðoàn Thánh Gia - <a 
              href='https://liendoaninhaxio.org/'
              target="_blank"
              rel="noopener noreferrer"
            >
              Liên Đoàn Inhaxiô
            </a><br />
            505 17th St SE Auburn, WA 98002<br />
            Email: <a href='mailto:thanhgiaauburn@gmail.com'>thanhgiaauburn@gmail.com</a><br />
            Copyright © 2004 - 2020. All Rights Reserved.
          </p>
        </S.SmallText>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
