import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink>
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink>
          <Instagram />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink>
          <Facebook />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
