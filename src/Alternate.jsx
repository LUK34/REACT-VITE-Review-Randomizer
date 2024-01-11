import { useState } from 'react';
import people from './data';
import { FaChevronLeft , FaChevronRight ,FaQuoteRight} from "react-icons/fa";

const App = () => 
{
  const[index,setIndex]= useState(0);
  const {name,job,image,text}=people[index];

  const checkNumber =(n)=>
  {
    if(n > people.length -1)
    {
        return 0;
    }
    if(n < 0)
    {
      return people.length-1;
    }
    return n;
  };


  const nextPerson = () =>
  {
    setIndex((c)=>
    {
        const newIndexValue=c+1;
        if(newIndexValue > people.length - 1 )
        {
          return 0; //this will return first index value
        }
        return newIndexValue;
    });
  };


  const prevPerson = () =>
  {
      setIndex((c)=>
      {
        const newIndexValue=c-1;
        if(newIndexValue < 0)
        {
           return people.length - 1; //this will return last index value
        }
        return newIndexValue;
      });
  };


  const randomPerson =()=>
  {
    let randomNumber=Math.floor(Math.random()*people.length);
    console.log(randomNumber);
    if(randomNumber === index)
    {
      randomNumber = index+1;
    }
    setIndex(checkNumber(randomNumber));
  };

  console.log(name);
  return (
  <main>
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className="person-img" />
        <span className='qoute-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='author'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
          </button>
      </div>
      <button className='btn btn-hipster' onClick={randomPerson}>Randomizer</button>
    </article>
  </main>
  );
};
export default App;
