import React from 'react'
import { convertMiliSeconds } from '../utils/utils'

export const MediaPlayer = ({ duration_ms, name, preview_url, image }) => {
 
  return (
    <div className='mediaplayer-container'>
      <div>
        <audio src={preview_url} controls autoPlay/>
      </div>
      <div className='mediaplayer-info'>
        <img src={image} alt="logo" className='mediaplayer--image'/>
        <div className="mediaplayer-info-list">
          <p>{name}</p>   
          <p className='mediaplayer-duration'>{duration_ms && convertMiliSeconds(duration_ms)}</p>
        </div>
      </div>
    </div>
  )
}
