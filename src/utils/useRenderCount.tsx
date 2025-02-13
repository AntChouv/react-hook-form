import React from 'react'

export const getRenderCount = () => {
    let count = 0
  return () => {
    count++
    return <div>Render Count : {count/2}</div> //we devide by two because in Strict Mode it renders twice every time
  }
}
