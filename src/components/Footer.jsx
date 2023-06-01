import React from "react";
import { Link } from 'react-router-dom';


function Footer() {
    function handleClick(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <section className="footer">

            <div className="Links row">
                <div className="Section col-lg-4 col-md-4 col-sm-12">
                    <Link className="link" to="./Procedures" onClick={handleClick}>
                        <h5>Procedures</h5>
                        <p>Pulmonary Function Test (PFT)</p>
                        <p>Bronchoscopy</p>
                        <p>Thoracoscopy</p>
                        <p>Bone Marrow Aspiration</p>
                        <p>Inter Coastal Drainage</p>
                        <p>Pig Tail Catheterization</p>
                        <p>Sleep Study</p>
                    </Link>
                </div>
                <div className="Section col-lg-4 col-md-4 col-sm-12">
                    <Link className="link" to="./Supportive" onClick={handleClick}>
                        <h5>Supportive Care</h5>
                        <p>Inhalers</p>
                        <p>Nebulizers</p>
                        <p>Oxygen Concentrators</p>
                        <p>Ventilation</p>
                    </Link>
                </div>
                <div className="Section col-lg-4 col-md-4 col-sm-12">
                <div>
                    <h5>Quick Links</h5>
                    <Link className="link" to="/" onClick={handleClick}><p>Home</p></Link>
                    <Link className="link" to="./AboutSpecialist" onClick={handleClick}><p>About Specialist</p></Link>
                    <Link className="link" to="./Procedures" onClick={handleClick}><p>Procedures</p></Link>
                    <Link className="link" to="./Supportive" onClick={handleClick}><p>Supportive Care</p></Link>
                    <Link className="link" to="./ReachUs" onClick={handleClick}><p>Reach Us</p></Link>
                    <Link className="link" to="tel:9629191821"><p>Book Appointment</p></Link>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <p>
                    Made with <i class="fa fa-heart"></i> by - Fireloop Developers
                </p>
            </div>

        </section>
    );
}

export default Footer;