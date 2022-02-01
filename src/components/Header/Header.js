import './Header.css';
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
import user from '../../images/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMoives,fetchAsyncShows } from '../../store/movieSlice';


const Header = ()=>{

    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const history =useHistory();

    const submitHandler=(event)=>{
        event.preventDefault();
        if(term ==='')
        {
            alert('Enter a valid Name');
            return;
        }
        dispatch(fetchAsyncShows(term));
        dispatch(fetchAsyncMoives(term))
        setTerm('');
        history.push('/');
    }
    return (
        <div className='header'>
            <div className='logo'>
            <Link to='/'>
                Movie App
            </Link>
            </div>
            
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type='text' value={term} placeholder='Movies or Shows' onChange={(e)=>{setTerm(e.target.value)}}/>
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>

            <div className='user-image'>
                <img src={user} alt='user'/>
            </div>
        </div>
    )
}

export default Header;