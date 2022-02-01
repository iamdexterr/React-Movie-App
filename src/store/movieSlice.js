import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from '../common/apis/movieApi';
import {APIKey} from '../common/apis/MovieApiKey'


export const fetchAsyncMoives = createAsyncThunk('moives/fetchAsyncMovies', async(term)=>{
    
    
        const response = await  movieapi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        return response.data;
    
});


export const fetchAsyncShows = createAsyncThunk('moives/fetchAsyncShows', async(term)=>{
    
    
        const response = await  movieapi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
        return response.data;
    
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('moives/fetchAsyncMovieOrShowDetail', async(id)=>{
    
    const seriesText = 'Friends';
        const response = await  movieapi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data;
    
});


const initialState ={
    movies :{},
    shows:{},
    selectedMoiveOrShow:{},
    loadingState : false
}

const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers: {
        addmovies :(state,action)=>{
            state.movies = action.payload;
        },
        removeSelectedMoiveOrShow: (state)=>{
            state.selectedMoiveOrShow ={}
        }
    },
    extraReducers :{
        [fetchAsyncMoives.pending] : (state)=>{
            console.log('Pending');
            return {...state, loadingState :true}
        },
        [fetchAsyncMoives.fulfilled] :(state,{payload})=>{
            console.log('Fetched Successfully');
            return {...state,movies : payload,loadingState:false}
        },
        [fetchAsyncMoives.rejected] :()=>{
            console.log('Rejected');
        },[fetchAsyncShows.fulfilled] :(state,{payload})=>{
            console.log('Fetched Successfully');
            return {...state,shows : payload}
        },
        [fetchAsyncShows.rejected] :()=>{
            console.log('Show Rejected');
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] :(state,{payload})=>{
            console.log('Show successfully');
            return {...state,selectedMoiveOrShow : payload}
        }
    }
})

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;