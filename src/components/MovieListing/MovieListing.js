import { useSelector } from "react-redux";
import MoiveCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import './MovieListing.css';
import { Settings } from "../../common/Settings";

const MovieListing = ()=>{

    const movies = useSelector(state => state.movies);
    const shows = useSelector(state => state.shows);
    
    let renderMovies = '';
    let renderShows = '';

    renderMovies = movies.Response ==='True' ? (
        movies.Search.map((movie,index)=>{
         return   <MoiveCard key={index} data={movie} />;
        
        })
    ): (<div className='movie-erroe'><h3>{movies.error}</h3></div>);
    

    renderShows = shows.Response ==='True' ? (
        shows.Search.map((movie,index)=>{
         return   <MoiveCard key={index} data={movie} />;
        
        })
    ): (<div className='movie-erroe'><h3>{shows.Error}</h3></div>);

    console.log(movies);
    console.log(renderMovies);

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                    <h2>Movies</h2>
                    <div className='movie-container'>
                        <Slider {...Settings}>{renderMovies}</Slider></div>
            </div>
            <div className='show-list'>
                    <h2>Shows</h2>
                    <div className='movie-container'>
                        <Slider {...Settings}>{renderShows}</Slider></div>
            
            </div>
        </div>
    )
}

export default MovieListing;