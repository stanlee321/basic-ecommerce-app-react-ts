import styled from 'styled-components';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div<{backdrop?:string} >`
    background: ${({backdrop}) => 
        backdrop? `url(${backdrop})`:'#000'
    }

`;

export const Content = styled.div`

`;

export const Text = styled.div`

`;