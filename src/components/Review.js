import React, { useState } from "react";

const Review = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  const prevPerson = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) random = index + 1;
    setIndex(checkNumber(random));
  };

  return (
  <article className="review">
    <div className="review-content">
      <img src={image} alt={name} className="person-img" />

      <div className="review-text">
        <h4 id={`author-${id}`} className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>prev</button>
          <button className="next-btn" onClick={nextPerson}>next</button>
        </div>

        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </div>
  </article>
);
};

export default Review;