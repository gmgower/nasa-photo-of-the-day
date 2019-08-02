import React from 'react';

import './PhotoCard.styles.scss';

import { Card, Image } from 'semantic-ui-react';

// import styled from 'styled-components';

import { H2Styled, DateStyled, CardStyled } from './styled.component'

// const H2Styled = styled.h2`
// color: purple;
// padding: 5px;
// `

// const DateStyled = styled.h3`
// font-size: 1.3rem;
// `

// const CardStyled = styled.div`
// width: 500px;

// `



function PhotoCard(props) {
  console.log(props);
  return (
    <CardStyled className='photo-cards'>
      <Image src={props.url} alt='' />
      <H2Styled>{props.title}</H2Styled>
      <Card.Content>
        <DateStyled>{props.date}</DateStyled>
        <Card.Description className='content'>
          {props.explanation}
        </Card.Description>
      </Card.Content>
    </CardStyled>
  );
}

export default PhotoCard;
