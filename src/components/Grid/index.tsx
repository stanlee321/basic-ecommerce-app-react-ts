import React from 'react';

// styles 

import { Wrapper, Content } from './Grid.styles';

interface Props {
    header: string,
    children: JSX.Element[],
}

const Grid = ( {header, children}: Props ) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;