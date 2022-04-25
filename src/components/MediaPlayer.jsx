import React from 'react'
import { convertMiliSeconds } from '../utils/utils'

export const MediaPlayer = ({ duration_ms, name, preview_url }) => {
 
  return (
    <>
      <div>
        <audio src={preview_url} controls autoPlay/>
      </div>
      <div>
        <p>{duration_ms && convertMiliSeconds(duration_ms)}</p>
        <p>{name}</p>   
      </div>
    </>
  )
}
