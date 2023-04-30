import React from "react";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <section className="footer">

            <div className="Links row">
                <div className="Section col-lg-4 col-md-4 col-sm-12">
                    <Link className="link" to="./Procedures">
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
                    <Link className="link" to="./Supportive">
                        <h5>Supportive Care</h5>
                        <p>Inhalers</p>
                        <p>Nebulizers</p>
                        <p>Oxygen Concentrators</p>
                        <p>Ventilation</p>
                    </Link>
                </div>
                <div className="Section col-lg-4 col-md-4 col-sm-12">

                    <h5>Quick Links</h5>
                    <Link className="link" to="/"><p>Home</p></Link>
                    <Link className="link" to="./AboutSpecialist"><p>About Specialist</p></Link>
                    <Link className="link" to="./Procedures"><p>Procedures</p></Link>
                    <Link className="link" to="./Supportive"><p>Supportive Care</p></Link>
                    <Link className="link" to="./ReachUs"><p>Reach Us</p></Link>
                    <p>Book Appointment</p>

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