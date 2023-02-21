import Movie from '../Movie/Movie.js';
import axios from 'axios';
import {useEffect, useState} from 'react'

// const harryPotterFirst = {
//   title: "Harry Potter and the Sorcers stone",
//   image: "https://m.media-amazon.com/images/I/51HSkTKlauL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
//   rating: 5
// };

// const sherlockHolmes = {
//   title: "Sherlock Holmes - the pink case",
//   image: "https://m.media-amazon.com/images/I/51ZqLGyqiGL._SY346_.jpg",
//   rating: 4.5
// };

// const ironman = {
//   title: "Iron man vs Batman",
//   image: "https://m.media-amazon.com/images/I/51uVGofXjIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
//   rating: 4
// };

// const spiderman = {
//   title: "Spider man in the multiverse",
//   image: "https://m.media-amazon.com/images/I/51qWmQzgecL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
//   rating: 5
// };

// const movies = [
//   harryPotterFirst,
//   sherlockHolmes,
//   ironman,
//   spiderman
// ];



const showMovies = (movie) => {
  return(<div>
    <Movie movie={movie}/>
  </div>);
}

const MovieList = ()=>{
  const [movies,setMovies] = useState([]);
  useEffect( ()=>{
    const fetchData = async () => {
    const req = await axios.get(`http://localhost:9000/movies`);
    setMovies(req.data)};
    fetchData();
  }, [])
  return (
    <div>
    {movies.map(showMovies)}
    </div>
  );
}; 

export default MovieList;