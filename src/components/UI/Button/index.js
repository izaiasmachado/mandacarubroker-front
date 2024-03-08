'use client'

import { FaLock } from "react-icons/fa";
import * as S from "./styles";

const Button = ({ text, clicked, onClick, width, height, disabled }) => {
    return (
        <S.Button width={width} height={height} clicked={clicked} onClick={onClick} disabled={disabled}>
            {disabled ? <FaLock size={15} color={"#fff"} />:text}
        </S.Button>
    );
  };
  
export default Button;