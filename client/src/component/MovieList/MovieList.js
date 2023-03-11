import Movie from '../Movie/Movie';
import {useState,useEffect} from 'react';
import axios from 'axios';

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
//   sherlockHolmes,
//   ironman,
//   spiderman
// ];
const showMovies = (movie) => {
  return(
    <div>
      <Movie movie={movie} />
    </div>
  )
}
const MoviesList = () => {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      const res = await axios.get('http://localhost:9000/movies');
    setMovies(res.data);
    }
    fetchData(); 
  }, []);
      return ( <div>
    {movies.map(showMovies)}
    </div >
    )
    
}
export default MoviesList;