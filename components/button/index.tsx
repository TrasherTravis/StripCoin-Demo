import React from "react";
import {ButtonStyled} from './styles';

const Button: React.FC<{ name: string; onClick: () => void, isInactive?: boolean; }> = ({name, onClick, isInactive}) => {

   return <ButtonStyled onClick={isInactive ? null : onClick} isInactive={isInactive}>{name}</ButtonStyled>
}

export default Button
