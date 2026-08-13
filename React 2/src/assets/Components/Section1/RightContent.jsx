import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <>
       {props.users.map(function(elem){

        return <RightCard img={elem.img} tag={elem.tag} num={elem.num}/>
       })}     
    </>
  )
}

export default RightContent
