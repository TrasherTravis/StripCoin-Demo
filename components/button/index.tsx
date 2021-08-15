import React from "react";
import {ButtonStyled} from './styles';

const Button: React.FC<{ name: string; onClick: () => void, isInactive?: boolean; font?: string; }> = ({
                                                                                                           name,
                                                                                                           onClick,
                                                                                                           font,
                                                                                                           isInactive
                                                                                                       }) => {

    return <ButtonStyled font={font} onClick={isInactive ? null : onClick} isInactive={isInactive}>{name}</ButtonStyled>
}

export default Button
