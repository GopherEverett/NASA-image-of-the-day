import React from 'react';

const AstronomyCard = (props) => {

    const { title, hdurl, explanation, date, copyright, url, media_type } = props.data

    return (
        <div className="astronomy-card">
            <h6 className="astronomy-title">{title}</h6>
            {media_type === 'image'  ?
                <a href={hdurl} className="astronomy-image-wrapper">
                    <img src={hdurl} alt={title} />
                </a> :
                <iframe
                    width="500"
                    height="340"
                    src={url}
                    rameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            }
            <p>{explanation}</p>
            <span>{date} {copyright}</span>
        </div>
    );
};

export default AstronomyCard;