import React from 'react';
import {Wrapper, CardHeader, CardBody, Instructions, Functional, BuyFunctional} from "./styles";

declare interface Props {
    title: string;
    isMobile?: boolean;
    buy?: React.ReactChild;
    functional: React.ReactChild;
    instructions: React.ReactChild;
}

const Card: React.FC<Props> = ({isMobile, title, instructions, functional, buy}) => {

    return (
        <Wrapper isMobile={isMobile}>
            <CardHeader>{title}</CardHeader>
            <CardBody isMobile={isMobile}>
                    <Instructions isMobile={isMobile}>
                        {instructions}
                    </Instructions>
                    <Functional isMobile={isMobile}>
                        {functional}
                    </Functional>
            </CardBody>
            {buy ? <BuyFunctional isMobile={isMobile}>{buy}</BuyFunctional> : null}
        </Wrapper>
    );
};

export default Card;