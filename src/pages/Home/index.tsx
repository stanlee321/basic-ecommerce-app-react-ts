import React from "react";

// Components
import HeroImage from '../../components/HeroImage';
import Grid from '../../components/Grid';
import Thumb from '../../components/Thumb';
import Spinner from "../../components/Spinner";
import SearchBar from '../../components/SearchBar';
import Button from "../../components/Button";

import { useHomeFetch } from "../../hooks/useHomeFetch";


const data = [
  { 
    id : 0,
    title: "ths a title"
  },
  { 
    id : 2,
    title: "thisitle"
  },
  { 
    id : 3,
    title: "te"
  },
  { 
    id : 4,
    title: "thtitle"
  }
]

const Home = () => {

  const  { state, loading, error, searchTerm, setSearchTerm }  = useHomeFetch();

  return (
    <>
      {!searchTerm && state.results[0]? (
      <HeroImage
        image={"https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-05/81aa90d0-36bd-11eb-a219-73e9ca8fa2ef.jpg"}
        title={"This is a title "}
        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        />
        ): null
      }
      <SearchBar setSearchTerm={setSearchTerm}/>

      <Grid header={ searchTerm? 'Search Result': "Popular Movies"}>
        {
          data.map( example => (

            <Thumb 
              key = { example.id}
              clickable={true}
              image = {
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-1c157.appspot.com/o/WhatsApp%20Image%202021-05-31%20at%2015.35.33.jpeg?alt=media&token=de4b9fb7-7566-4fb4-b496-d8d323f16793"
              }
              movieId= {example.id}
              alt = {"thumb-image"}
              >

            </Thumb>
            // <div key={example.id}>{example.title}</div>
          ))
        }
      </Grid>
      <Spinner/>
        <Button text='Load More' callback={()=>console.log("CLICK")}/>
    </>
  );
};

export default Home;
