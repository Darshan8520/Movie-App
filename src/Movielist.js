import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Cards from "./Cards";
import './Movielist.css'
let MovieList=({moviesList})=>{
    //   let {type}=useParams()

//  useEffect(()=>{
//     getData()
//  },[type])
console.log("On search re render")

return (
    <div className="movie_list">
     <h2 className="list_title">POPULAR</h2>
     <div className="list_cards">
        {
            moviesList.map(movie =>(
                <Cards movie={movie} key= {movie.id}/>
                // console.log(item)
            ))
        }
     </div>
    </div>
)
}
export default MovieList;