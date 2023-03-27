import { useEffect } from 'react'
import NavScrollExample from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
// import { NavLink } from "react-router-dom";
import './Layout.css'
import {Link} from 'react-router-dom'
import MovieList from './Movielist';
// import MovieList from './Movielist';

function Layout() {
    let [movies, setMovies] = useState([])
    let [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then((result) => {
                result.json().then((resp) => {
                    // console.log(resp);
                    setMovies(resp.results)
                })
            })

            fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then((result) => {
                result.json().then((resp) => {
                    // console.log(resp,'resp')
                    // console.log(resp);
                    setMoviesList(resp.results)
                })
            })
    }, [])

  

    let search = (input)=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${input}`)
            .then((result) => {
                result.json().then((resp) => {
                    // console.log(resp);
                    setMovies(resp.results)
                })
            })
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${input}`)
        .then((result) => {
            result.json().then((resp) => {
                console.log(resp,'resp')
                // console.log(resp);
                setMoviesList(resp.results)
            })
        })
    }

    ;
    // console.log(movie);
    return (
        <>
            <div className="App">
                <NavScrollExample search={search}/>
            </div>
            <div className='poster' style={{ backgroundColor: 'black', color: 'whitesmoke' }}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        movies.map( item => (
                            <Link style={{textDecoration : "none" , color : "white" }} to={`movie/${item.id}`}>
                            <div>
                                <div className='posterImage' >
                                    <img src={`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`} style={{ height: 800 }} />
                                </div>
                                <div className='posterImage_overlay'>
                                    <div className='posterImage_title'>{item? item.original_title : ""}</div>
                                 <div className='posterImage_runtime'>
                                    {item ? item.release_date : ""}
                                    <span className='posterImage_rating'>
                                        {item ? item.vote_average : ""}
                                        <i className='fas fa-star'/> {" "}
                                        {/* <i class="fa-solid fa-star"/> {" "} */}
                                    </span>
                                </div>
                                <div className='posterImage_description'>
                                    {item ? item.overview : ""}
                                </div>
                            </div>
                            </div>
                               </Link>
                        ))
                    }
                </Carousel>
                <MovieList moviesList={moviesList}/>

            </div>
        </>
    );
}

export default Layout;