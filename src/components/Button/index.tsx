import React from 'react';

// Styles
import { Wrapper } from './Button.styles';

interface Props {
    text: string,
    callback: React.MouseEventHandler<HTMLButtonElement>,
}


const Button = ( {text, callback }: Props ) => (

    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
)

export default Button;