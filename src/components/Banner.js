import React from 'react';
import { getMovies } from '../api';
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name ==="netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setMovie(movies(randomIndex));
        } catch(error) {
            console.log("Banner fetchRandomMovie error: " , error);
        }
    };
    useEffect(() => {
        fetchRandomMovie();
    }, [])
    return <div>Banner</div>
    
}

export default Banner