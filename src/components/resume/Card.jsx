import React from 'react'

const Card = (props) => {
  return (
   <div className="timeline__item">
     <i className={props.icon}></i>
     <span className='timeLine__date'>{props.year}</span>
     <h2 className='timeline__univercity'>National Polytechnic University of Armenia</h2>
     <h3 className='timeline__title'>{props.title}</h3>
   
   </div>
  )
}

export default Card