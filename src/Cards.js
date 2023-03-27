import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton ,{SkeletonTheme} from 'react-loading-skeleton'
import './Cards.css'
let  Cards =({movie})=>{
    let [loadingCards,setLoadingCards]=useState(false)
   useEffect (()=>{
      setTimeout(()=>{
         setLoadingCards()
      },1500)
    },[])
    return <>
    {
        loadingCards 
        ?
        <div className='cards'>
            <SkeletonTheme >
              <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
      :
      <Link style={{textDecoration : "none" , color : "white" }} to={`movie/${movie.id}`}>
      <div className='cards'>
       <img className='cards_img' src={`https://image.tmdb.org/t/p/original${ movie ? movie.poster_path : ""}`}/>
      <div className='cards_overlay'>
        <div className='cards_title'>{movie ? movie.original_title : ""}</div>
        <div className='cards_runtime'>{movie ? movie.release_date : ""}
        <span className='cards_rating'>{movie ? movie.vote_average : ""}
        <i className='fas fa-star'/>
        </span>
        </div>
        <div className='cards_description'>{movie ? movie.overview.slice(0,100)+"....": ""}</div>
      </div>
      </div>
      </Link>
}
    </>
}
 export default Cards