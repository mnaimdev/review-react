import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import people from '../data.js';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const prevBtn = () => {
        setIndex((index) => {
           let newIndex = index - 1;
           return checkPerson(newIndex);
        })
    }


    const nextBtn = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkPerson(newIndex);
        })
    }

    const checkPerson = (person) => {
        if (person > people.length - 1) {
            return 0;
        }

        if (person < 0) {
            return people.length - 1;
        }

        return person;
    }

    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random() * people.length);
        setIndex(randomIndex);
    }

    

  return (
    <article className='review' style={{marginTop: '30px'}}>
        <div className="img-container">
            <img src={image} alt={name} className='person-img' />
        </div>
       
        <p className='author'>{name}</p>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <button className='prev-btn'>
        <FaAngleLeft onClick={prevBtn}/>
        </button>
        <button className='next-btn'>
        <FaAngleRight onClick={nextBtn}/>
        </button>
        <button className='random-btn' onClick={randomPerson}>Random</button>
    </article>
  )
}

export default Review;