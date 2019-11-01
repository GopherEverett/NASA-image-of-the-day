import React from 'react';

const AstronomyCard = (props) => {

    const { title, hdurl, explanation, date, copyright } = props.data

    return (
        <div className="astronomy-card">
            <h6 className="astronomy-title">{title}</h6>
            <a href={hdurl} className="astronomy-image-wrapper">
                <img src={hdurl} alt={title} />
            </a>
            <p>{explanation}</p>
            <span>{date} {copyright}</span>
        </div>
    );
};

export default AstronomyCard;