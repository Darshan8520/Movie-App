import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Deatails.css'

let MovieDetails=()=>{
    let [details,setdetails]=useState([])
    let {id}=useParams()
useEffect(()=>{
  getData()
})

// console.log(details)
let getData=()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then((result)=>{
        result.json().then((resp)=>{
            setdetails(resp)
            // console.log(resp.results)
        })
    })
}
return (
  <div className="final">
  <div className="movie">
  <div className="movie__intro">
      {/* <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${details ? details.backdrop_path : ""}`} /> */}
  </div>
  <div className="movie__detail">
      <div className="movie__detailLeft">
          <div className="movie__posterBox">
              <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${details ? details.poster_path : ""}`} />
          </div>
      </div>
      <div className="movie__detailRight">
          <div className="movie__detailRightTop">
              <div className="movie__name">{details ? details.original_title : ""}</div>
              <div className="movie__tagline">{details ? details.tagline : ""}</div>
              <div className="movie__rating">
                  {details ? details.vote_average: ""} <i class="fas fa-star" />
                  <span className="movie__voteCount">{details ? "(" + details.vote_count + ") votes" : ""}</span>
              </div>  
              <div className="movie__runtime">{details ? details.runtime + " mins" : ""}</div>
              <div className="movie__releaseDate">{details ? "Release date: " + details.release_date : ""}</div>
              <div className="movie__genres">
                  {
                      details && details.genres
                      ? 
                      details.genres.map(genre => (
                          <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                      )) 
                      : 
                      ""
                  }
              </div>
          </div>
          <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div>{details ? details.overview : ""}</div>
          </div>

      </div>
  </div>
</div>
</div>
)

}
export default MovieDetails;
