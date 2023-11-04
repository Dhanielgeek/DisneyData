import React from 'react'

const Card = ({mov}) => {

    const data = Object.values(mov)
    
    
  return (
    <div className='Card_Container'>
        <div className='Card_wrapper'>
        {
            data.map((props)=>(
                <>
                
                     <div className='Card'>
                    <div className='Card_img'>
                        <img src={props.cardImg} alt="" />
                    </div>
                    <div className='Card_Content'>
                        <h6>{props.title}</h6>
                        <p>{props.subTitle}</p>
                        <span>STREAM NOW</span>
                        <div className='New' style={{background: props.type === "new" ? "red" : props.type === "trending" ? "green" : props.type === "original" ? "blue" : "lightblue"}} >
                           {props.type}
                        </div>
                    </div>
                </div> 
                
                </>
            ))
        }
        </div>
    </div>
  )
}

export default Card