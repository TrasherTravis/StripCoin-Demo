import React from 'react';
import {Container, InnerInput} from "./styles";

declare interface Props {
    currencyName: string;
    setState: Function;
    value: string;
    balance?: number;
    error?: boolean;
    convertValue: Function;
    setError?: Function;
}

const Input: React.FC<Props> = ({
                                    currencyName,
                                    setState,
                                    value,
                                    error,
                                    setError,
                                    balance,
                                    convertValue

                                }) => {


    const validation = (value: string) => {
        let current: number = 0;

        const regExp: RegExp = /[0-9]|[.]/g;
        let validated: Array<string> = value.match(regExp) ?? [];
        let foundBefore: number = 0;

        for (let i: number = 0; i < validated.length; i++) {
            if (validated[i] === '.') ++foundBefore;
            if (foundBefore === 2 && validated[i] === '.') validated.splice(i, 1, '');
        }

        if (value[0] === '.') validated = [];

        console.log(validated)
        let output: string = validated.join('')

        console.log(output)
        setState(output);
        current = parseFloat(output);

        if (setError) {
            if (balance < current) setError(true);
            else setError(false);
        }
        console.log(balance, current)
    };

    return (
        <Container isValid={error}>
            <InnerInput value={value} onChange={(e) => {
                validation(e.target.value);
                convertValue(e.target.value.length === 0 ? 0 : parseFloat(e.target.value))
            }}/>
            {currencyName}
        </Container>
    )
};

export default Input;