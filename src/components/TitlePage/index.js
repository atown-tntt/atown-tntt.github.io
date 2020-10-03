import React from 'react';
import { memberColors } from '../../../config/constants';

import * as S from './styled';

const TitlePage = props => {
  const { text, category } = props;

  if (category in memberColors) {
    return (
      <S.TitleElement
        className='p-4'
        style={{color:'white', backgroundColor:memberColors[category]}}
      >
        {text}
      </S.TitleElement>
    );
  } else {
    return <S.TitleElement>{text}</S.TitleElement>;
  }
};

export default TitlePage;
