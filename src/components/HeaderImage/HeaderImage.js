import React from 'react';
import './style.css';

function HeaderImage(){
    let image = require("./static/download.png")
    return (
        <div>
            <img className = "pokelogo" src={image.default} alt="poke header image" />
        </div>
    )
}

export default HeaderImage;