import {useEffect, useState} from 'react'


const initialState = {
    page:0,
    results: [  { 
        id : 0,
        title: "ths a title"
      },],
    total_pages: 0,
    total_results: 0
}


export const useHomeFetch = () => {

    const [ searchTerm, setSearchTerm ] = useState('')

    const [ state, setState ] = useState(initialState);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    // Initial and search

    useEffect( () => {
        setState(initialState)
        console.log(searchTerm)
    }
    ,[searchTerm])

    return { state, loading, error, searchTerm, setSearchTerm }
}