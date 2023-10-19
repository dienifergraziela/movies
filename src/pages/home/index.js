import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import '../../assets/css/style.css';
import banner from '../../assets/images/banner.jpg'
import "./style.css";
import SearchMovies from '../../components/search/SearchMovies';

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    console.log(movies);

    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMouseEnter = (movie) => {
        setSelectedMovie(movie);
    }

    const handleMouseLeave = () => {
        setSelectedMovie(null);
    }

    const handleSearch = (query) => {
        if (query.trim() === '') {
            return;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${query}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    };


    return (
        <div>
            <NavBar />
            <div className="banner">

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Bee Movies</h5>
                                <p>Todos os filmes num só lugar!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



            <SearchMovies onSearch={handleSearch} />

            {movies.length > 0 ? (
                <div className="container" id="movies">
                    <div className="row">
                        {movies.map((movie) => (
                            <div key={movie.id} className="col-md-3 movie">

                                <div
                                    className="movie-container"
                                    onMouseEnter={() => handleMouseEnter(movie)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img
                                        src={`${imagePath}${movie.poster_path}`}
                                        alt={movie.title}
                                        className="movie-image"
                                    />
                                    {selectedMovie === movie && (
                                        <div className="movie-details">
                                            <h2>{movie.title}</h2>

                                            <Link to={`/${movie.id}`}>
                                                <button id="button">Detalhes</button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="loading">

                    <div className="spinner-border text-light " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h5> Carregando...</h5>
                </div>
            )}


            <Footer />

        </div>
    );
}

export default Home;