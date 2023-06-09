import React from "react";
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <section>
            <section>
                <div className="landing-page row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1>breathe in life with lungs that last</h1>
                        <p>exceptional pulmo care clinic for all your lung related problems </p>
                        <Link to="tel:9629191821"><button type="button" className="btn btn-primary btn-lg appointment-btn">Book Appointment</button></Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="content content-padding">
                    <h1 className="heading">
                        ABOUT SPECIALIST
                    </h1>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img className="about-img" alt="Dr. Jayakumar" src="/images/doctor-img.webp" />
                        </div>

                        <div className="about-content col-md-6 col-sm-12">
                            <h1>Dr. JAYAKUMAR.S</h1>
                            <h2>MBBS.,DTCD.,DNB., MNAMS.,FCID.,FIID.,
                                EDARM.,
                            </h2>
                            <h2>CONSULTANT INTERVENTIONAL PULMONOLOGIST, INTENSIVIST & SLEEP MEDICINE SPECIALIST</h2>
                            <p>Dr. Jayakumar is one of the reputed Pulmonologist, Sleep Medicine Specialist, Allergist/Immunologist, Intensivist and Infectious disease specialist with a thriving experience of more than 10 years. He is specialized in diagnosing and treating Lung conditions like Asthma, Chronic Cough, COPD, smoking related Lung diseases, Bronchiectasis, Sinusitis, Tuberculosis, Recurrent Pneumonia, Chronic Fever of Unknown Origin, Sleep Apnoea and Sleep related Lung disorders, Pleural Effusion, Acute/Chronic Respiratory Failure, Interstitial Lung disease, ....</p>
                            <div className="about-btn"><Link to="/AboutSpecialist"><button type="button" className="btn btn-primary btn-lg">Know More...</button></Link></div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default LandingPage;