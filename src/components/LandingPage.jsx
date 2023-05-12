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
                        <Link><button type="button" className="btn btn-primary btn-lg appointment-btn">Book Appointment</button></Link>
                        {/* to="tel:9629191821" */}
                    </div>
                </div>
            </section>

            <section>
                <div className="content content-padding">
                    <h1 className="heading">
                        About Specialist
                    </h1>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img className="about-img" alt="Dr. Jayakumar" src="/images/doctor-img.webp" />
                        </div>

                        <div className="about-content col-md-6 col-sm-12">
                            <h1>Dr. Jayakumar.S</h1>
                            <h2>MBBS.,DTCD.,DNB., MNAMS.,FCID.,FIID.,
                                EDARM.,
                            </h2>
                            <h2>CONSULTANT INTERVENTIONAL PULMONOLOGIST, INVENTIST & SLEEP MEDICINE SPECIALIST</h2>
                            <p>Dr. Jayakumar is one of the reputed Pulmonologist, Sleep Medicine Specialist, Allergist/Immunologist, Intensivist and Infectious disease specialist with a thriving experience of more than 10 years. He is specialised in diagnosing and treating lung conditions like Asthma, Bronchiectasis, Acute respiratory distress syndrome, COPD, Cor pulmonate, Sleep Apnoea. The doctor has exemplary experience in treating Breathlessness, Chest pain, Haemoptysis, Pleural effusion, Chronic cough, Respiratory infection. He has the best treatment in Eosinophilic lung disease, Pneumothorax,  ....</p>
                            <div className="about-btn"><Link to="/AboutSpecialist"><button type="button" className="btn btn-primary btn-lg">Know More...</button></Link></div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default LandingPage;