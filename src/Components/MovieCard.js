import React from "react";
import "../Styles/Home.css";

const MovieCard = (props) => {
    const { banner, title } = props.original;
    console.log(banner);
    return (
        <div className="media-list" >
            <div className="media-banner" >
                <img alt={ title} src={ banner }/>
            </div>
            
        </div>
    )
}

export default MovieCard;
