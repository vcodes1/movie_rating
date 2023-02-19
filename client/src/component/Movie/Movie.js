const Movie = ({movie})=>{
  return(
    <div>
    <h2>{movie.title}</h2>
    <img src={movie.image} />
    <p>Rating {movie.rating}</p>
    </div>
  );
};

export default Movie;