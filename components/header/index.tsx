import React from "react";
import {ContainerLogo, Image} from "./styles";

const Header: React.FC<{ isMobile?: boolean }> = ({isMobile}) => {
    return (
        <ContainerLogo isMobile={isMobile}>
            <Image src="images/splash1.png" alt="Logo"/>
            <Image src='images/stripecoin.png'/>
           {/* <img src='images/splashpresale.png'/>*/}
        </ContainerLogo>
    );
};


export default Header;
