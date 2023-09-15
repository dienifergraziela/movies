import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_netflix.png";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";

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

    return (
        <div>

            <NavBar />

            <main>
                <div className="main-movie">
                    <div className="container">
                        <h3 className="title-movie">Melhor site de filmes</h3>
                        <p className="description">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <div className="buttons">
                            <button role="button" className="button">
                                <i className="fas fa-play"></i>
                                Filmes
                            </button>
                            <button role="button" className="button">
                                <i className="fas fa-info-circle"></i>
                                MAIS INFORMAÇÕES
                            </button>
                        </div>
                    </div>
                </div>
            </main>


            <h1>D'Movies</h1>

            {movies.length > 0 ? (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                            />{/* Quita las comillas alrededor de movie.title */}
                            <span>{movie.title}</span>
                            <Link to={`/${movie.id}`}>
                                <button>Detalhes</button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>Carregando</h2>
            )}


            <Footer />

        </div>
    );
}

export default Home;