import { useState, useEffect, useCallback } from "react";


import { IMovie } from '../interfaces/movieInfo';



export const useMovieFetch = (movieId: number) => {

    const [ state, setState ] = useState<IMovie>({
        movieId: 3,
        vote_average:2.3,
        actors: "Rambo", 
        directors: [{credit_id: 33, name: "her name"}]
    });

    const [ loading, setLoading ] = useState(true);
    const [ error, setError] = useState(false);

    const fetchData =  useCallback(() => {
        try {
            setLoading(true);
            setError(false);

            const movie = {
                movieId,
                original_title: "007 Secret Agent",
                vote_average: 2.3,
                poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzGDoTU0z7y_lpt2so2YpCikowSQiqvg8NynZN7-fTwifkEfwtl1BFURMrG5bgXCzP3w&usqp=CAU",
                // poster_path: "https://firebasestorage.googleapis.com/v0/b/ecommerce-1c157.appspot.com/o/WhatsApp%20Image%202021-05-31%20at%2015.35.33.jpeg?alt=media&token=de4b9fb7-7566-4fb4-b496-d8d323f16793",


                backdrop_path: "https://p4.wallpaperbetter.com/wallpaper/622/1005/217/aquaman-2018-movie-12k-poster-wallpaper-preview.jpg"
            }

            const credits = {
                cast: "Jhon Lenon",
            }


            const directors = [
                {credit_id: 1234434, name: "Smith"},
                {credit_id: 1234, name: "James"},
                {credit_id: 12, name: "cameron"} ]

            setState({
                ...movie,
                actors: credits.cast,
                directors
            })
            setLoading(false);


        } catch ( error ) {
            setError(true)
        }
    }, [ movieId ]);


    useEffect(()=> {

        fetchData();

    },[movieId, fetchData]);

    return { state, loading, error };
}