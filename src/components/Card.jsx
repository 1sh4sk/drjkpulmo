
import React from 'react'

export default function Card({item}) {
  return (
    /*********** Treatment block start  **********/
    <div className="cardContainer row">
       {/* Card cover start */}
        <div className="cardCover col-lg-3 col-md-4 col-sm-6">
            {/* Image block start */}
            <div className="cardImageContainer">
                <img src={item.img} alt=""></img>
            </div>
            {/* Image block end */}
            {/* Text block start */}
            <div className="textContainer">
                <p>{item.title}</p>
            </div>
            {/* Text block end */}
        </div>
        {/* Card cover end */}
    </div>
    /*********** Treatment block end  **********/
  )
}
