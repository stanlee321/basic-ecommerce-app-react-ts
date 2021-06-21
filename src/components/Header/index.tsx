import React from "react";


import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDLogoImg } from "./Header.sytles";


const Header = () => (

    <Wrapper>
        <Content>
            <LogoImg src = { RMDBLogo } alt="rmdb-logo"/>
            <TMDLogoImg src = { TMDBLogo } alt="tmdb-logo"/>
        </Content>
    </Wrapper>
)

export default Header;