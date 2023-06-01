import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    function handleClick(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo.webp" alt="Drjkpulmocare" width="150" height="70" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" onClick={handleClick}><span  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">HOME</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./AboutSpecialist"><span  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">ABOUT SPECIALIST</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./Procedures"><span  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">PROCEDURES</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./Supportive"><span  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">SUPPORTIVE CARE</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./ReachUs"><span  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">REACH US</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="tel:9629191821"><button type="button" className="btn btn-primary">Book Appointment</button></Link>
                        
                        </li>
                    </ul>
                </div>


            </div>
        </nav>


    );
}

export default Header;