import React from "react";
function Imaginer(props) {
    return (
        <>
            <h1>{props.viewData.title}</h1>
            <span>{props.viewData.date}</span>
            <p>{props.viewData.explanation}</p>
            <img src={props.viewData.url} alt={props.viewData.explanation} />
            <span>{props.viewData.media_type}</span>
            <p>{props.viewData.explanation}</p>



        </>
    )
}

export default Imaginer