import React, { useState, useEffect, useRef } from 'react';


// Image

import searchIcon from '../../images/search-icon.svg';

// Styles

import { Wrapper, Content } from './SearchBar.styles';

interface Props {
    setSearchTerm?: string
}

const SearchBar = ( { setSearchTerm }: Props ) => {

    const [ state, setState ] = useState('');




    return (
        <Wrapper>
          <Content>
              <img src={searchIcon} alt='search-icon' />
              <input type='text' placeholder='Search Movie' onChange = { event => setState(event.currentTarget.value) }
                value={state}
                />
        </Content>  
        </Wrapper>
    )
}

export default SearchBar;