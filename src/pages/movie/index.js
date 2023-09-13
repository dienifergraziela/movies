import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                const res = data.results;
                let filme = res.find((key) => {
                    // eslint-disable-next-line
                    return key.id == id;
                });
                setMovie(filme);
            }); // eslint-disable-next-line
    }, []);

    return (
        <div id="section">
            <nav>
                <h1>Movie</h1>
            </nav>
            <div className="card mb-3" id="movie">
                <div className="row g-0" id="sla">
                    <div className="col-md-4">
                        <img
                            className="img-fluid rounded-start"
                            src={`${imagePath}${movie.poster_path}`}
                            alt="{movie.title}"
                        />        </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{movie.title}</h1>
                            <p className="card-text" id="dataL">Data de lançamento: {movie.release_date}</p>
                            <h4>Descrição</h4>
                            <p className="card-text">{movie.overview}</p>
                            <Link to="/">
                                <button className="link_button">Voltar</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Movie;


