'use client'

import * as S from "./styles";

const Button = ({ text, clicked, onClick, width, height }) => {
    return (
        <S.Button width={width} height={height} clicked={clicked} onClick={onClick}>
            {text}
        </S.Button>
    );
  };
  
export default Button;