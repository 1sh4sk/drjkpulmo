import React from "react";
import { useLocation } from 'react-router-dom';

function CardDetails() {

    const location = useLocation();
    return (
        <section>


            <div className="card-details">

                <h1>{location.state.item.title}</h1>
                <img src={location.state.item.img} width="300px" height="200px" style={{ borderRadius: "15px" }} alt=""></img>
                <p>{location.state.item.explanation}</p>

            </div>

        </section>
    );
}

export default CardDetails;