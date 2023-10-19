import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { NavBar } from "../../components/navbar";
import { Avaliation } from "../../components/avaliation";
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

            <NavBar />
            <div className="container" id="movie">
                <div className="row">
                    <div className="col-md-3">
                        <img
                            className="img-fluid rounded-start"
                            src={`${imagePath}${movie.poster_path}`}
                            alt="{movie.title}"
                        />
                        <Avaliation />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h1 className="card-title">{movie.title}</h1>
                            <h4>Descrição:</h4>
                            <p className="card-text">{movie.overview}</p>
                            <i class="fas fa-calendar"></i>
                            <p className="card-text" id="dataL"> Data de lançamento: {movie.release_date}</p>
                            <div>
                                <Link to="/">
                                    <button className="link_button">Voltar</button>
                                </Link>
                            </div>


                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Movie;


