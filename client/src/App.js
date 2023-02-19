import logo from './logo.svg';
import './App.css';
import MovieList from "./component/MovieList/MovieList.js";
import Header from './component/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList/>
    </div>
  );
}

export default App;
