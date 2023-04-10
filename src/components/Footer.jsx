import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer">

            <div className="Links row">
                <div className="Section col-lg-4 col-md-4 col-sm-12">
                    <Link className="link" to="./Procedures">
                        <h5>Pocedures</h5>
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
                    <Link className="link" to="./Header">
                        <h5>Quick Links</h5>
                        <p>Home</p>
                        <p>About Specialist</p>
                        <p>Procedures</p>
                        <p>Book Appointment</p>
                    </Link>
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