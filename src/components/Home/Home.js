import MovieListing from '../MovieListing/MovieListing';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMoives,fetchAsyncShows } from '../../store/movieSlice';
import './Home.css';
import { useSelector } from 'react-redux';

const Home = ()=>{

    const isLoading = useSelector(state => state.loadingState);
    const dispatch = useDispatch();
    const movieText = 'Harry';
    const seriesText = 'Friends';
    useEffect(() => {
        dispatch(fetchAsyncMoives(movieText));
        dispatch(fetchAsyncShows(seriesText));
    }, [dispatch])

    return (
        <>
        <div className='home'>
        {isLoading && <div className='loading-screen'>Loading...</div>}  
            <MovieListing />
        </div>
        </>
    )
}

export default Home;