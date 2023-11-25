import React, { useState } from 'react';
import data from '../data';

const ReviewSample = () => {
    const [index, setIndex] = useState(0);
    const {name, job, text} = data[index];

    const handleNext = () => {
        setIndex((prev) => {
            const newIndex = prev + 1;
            return checkIndex(newIndex);
        });
    }

    const handlePrev = () => {
        setIndex((prev) => {
            const newIndex = prev - 1;
            return checkIndex(newIndex);
        });
    }


    const checkIndex = (index) => {
        if (index > data.length - 1) {
            return 0;
        }

        if (index < 0) {
            return data.length - 1;
        }

        return index;
    }


    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setIndex(randomIndex);
    }



  return (
    <>
        <div>
            <p>{name}</p>
            <p>{job}</p>
            <p>{text}</p>
            <button onClick={handleNext}>next</button>
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleRandom}>random</button>
        </div>
    </>
  )
}

export default ReviewSample;