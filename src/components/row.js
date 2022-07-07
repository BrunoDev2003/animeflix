import React, {useEffect} from 'react';
import { getMovies} from "../api";
import styled from "styled-components";
import "./Row.css";

const Fonte = styled.h2 `
    font-size: 1.0em;
    text-align: center;
    color: red;
`;

const RowContainer = styled.section `
    margin-left: 20px;
    color: white;
`;

const Cards = styled.section `
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
`;

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({title,path,isLarge}) {
    const [movies, setMovies] = React.useState([]);

    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies (_path);
            console.log("data ", data);
            setMovies (data?.results);
        } catch(error) {
            console.log("fetchMovies error: ", error);
        }
    };

    useEffect(() => {
    fetchMovies(path);
    }, [path]);
    
    return (
    <div className="row-container">
        <Fonte>
        <h2 className="row-header">{title}</h2> 
        </Fonte>
        <div className="row-cards">
            <RowContainer>
            <Cards>
            {movies?.map((movie) => {
                return (
                    
                    <img 
                    className={`movie-card ${isLarge && "movie-card-large"}`}
                    key={movie.id} 
                    src={`${imageHost}${
                        isLarge ? movie.backdrop_path : movie.poster_path
                    }`}
                    alt={movie.name}
                    ></img>
                );
            })}
            </Cards>
            </RowContainer>
        </div>
    </div>
    )
}

export default Row;