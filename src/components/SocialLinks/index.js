import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://www.facebook.com/groups/Tnttauburn"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
