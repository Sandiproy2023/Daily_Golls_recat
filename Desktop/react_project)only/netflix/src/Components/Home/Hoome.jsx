import React, { useEffect, useState } from 'react'
import"./Home.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"


const apikey ="e0a238298162209ea8a3e086b97a240b"
const url ="https://api.themoviedb.org/3/"
const imgurl ="https://image.tmdb.org/t/p/original"
const upcoming ="upcoming"
const nowPlaying ="now_playing"
const Popular= "popular"
const TopRated ="top_rated"

const Card =({img})=>(
<img className='card' src={img} alt='cover'  />
)

const Row =({title,arr=[{
//  img: "https://picsum.photos/200/300?nocache=<?php echo microtime"
},
]})=>(
   <div  className='row'>
    <h1>{title}</h1>
     <div>
     
 {
  arr.map((item,index)=>(
    <Card  key={index} img={ `${imgurl}/${item.poster_path}`}/>

  ))
 }  
     </div>

   </div>
)


const Hoome = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setUPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  
  useEffect(()=>{
        const fetchupcoming = async()=>{
        const {data:{results}}=  await  axios.get(`${url}/movie/${upcoming}?api_key=${apikey}&page=3`);
  // console.log(results);
  setUpcomingMovies(results)
  // console.log(upcomingMovies);
  
  };
  const fetchNowplaying = async()=>{
    const {data:{results}}=  await  axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}&page=2`);
// console.log(results);
setNowPlayingMovies(results)
// console.log(upcomingMovies);

};
const fetchPopular = async()=>{
  const {data:{results}}=  await  axios.get(`${url}/movie/${Popular}?api_key=${apikey}`);
// console.log(results);
setUPopularMovies(results)
// console.log(upcomingMovies);

};
const fetchTopRated = async()=>{
  const {data:{results}}=  await  axios.get(`${url}/movie/${TopRated}?api_key=${apikey}`);
// console.log(results);
setTopRatedMovies(results)
// console.log(upcomingMovies);

};
const getAllgenre = async()=>{
  const {data:{genres}}=  await  axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
  
// console.log(results);
setGenre(genres)
// console.log(upcomingMovies);

};
  getAllgenre()
  fetchupcoming()
  fetchNowplaying()
  fetchPopular()
  fetchTopRated()
  },[])



  return (
    <section className='home'>
        <div className='banner' style={{
          backgroundImage:popularMovies[0]?`url(${`${imgurl}/${popularMovies[0].poster_path}`})`:"rgb(16,16,16);"
        }}>
             {
              popularMovies[0]&&
              (
                <h1>{popularMovies[0].original_title}</h1>
              )
             }

             {
              popularMovies[0]&&(
                <p>{popularMovies[0].overview}</p>
              )
             }

        <div>
        <button> <BiPlay /> play </button>
             <button>my list <AiOutlinePlus /> </button>
        </div>
        </div>
        <Row title={"upcomingMovies"} arr={upcomingMovies}/>
        <Row title={"nowPlayingMovies"} arr={nowPlayingMovies}/>
        <Row title={"popularMovies"} arr={popularMovies}/>
        <Row title={"topRatedMovies"} arr={topRatedMovies}/>
        <Row title={"comingsoonMovies"} arr={upcomingMovies}/>

        <div className='genreBox'>
          {
            genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
            ))
          }

        </div>
        
    </section>
  )
}

export default Hoome
