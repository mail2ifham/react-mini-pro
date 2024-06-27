import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./style.css"

function StarRating({numOfStar = 10}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className="star-rating">
        {[...Array(numOfStar)].map((_,index) => {
            index = index+1
            return(
                <FaStar
                key={index}
                onClick={()=>setRating(index)}
                onMouseEnter={()=>{setHover(index)}}
                onMouseLeave={()=>setHover(rating)}
                size={40}
                className={index <= (hover || rating) ? "active":"inactive"}
                />

            )
        })}
        </div>
    )

}

export default StarRating;