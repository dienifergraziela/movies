import '../../assets/css/style.css';
import React, { useState } from 'react';


export function Avaliation(){
    const [rating, setRating] = useState(null);

    const handleRating = (value) => {
      setRating(value);
    };
  
    return (
      <div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value}>
              <input
                type="radio"
                name="rating"
                value={value}
                onClick={() => handleRating(value)}
              />
              <span className={value <= rating ? 'filled' : ''}>&#9733;</span>
            </label>
          ))}
        </div>
        <p className='rating-text'>Sua avaliação: {rating} estrela(s)</p>
      </div>
    );
}