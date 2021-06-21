import React, { useState, useEffect, useRef } from 'react';


// Image

import searchIcon from '../../images/search-icon.svg';

// Styles

import { Wrapper, Content } from './SearchBar.styles';

interface Props {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ( { setSearchTerm }: Props ) => {

    const [ state, setState ] = useState('');

    // Control initial render for search do not triger
    const initial = useRef(true);


    useEffect( () => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout( () => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)

    }, [setSearchTerm, state])

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