import React from "react";

function AboutSpecialist() {
    return (
        <section>

            <div className="about-container">
                {/* <div className="background-container"> */}
                {/* <h1>
                        DR. JAYAKUMAR
                    </h1>
                    <p>
                        pulmonologist, sleep specialist, allergist/immunologist, Intensivist and Infectious disease specialist
                    </p> */}
                {/* </div> */}
            </div>

            <div className="heading about-heading">
                <h1 >
                    DR. JAYAKUMAR.S
                </h1>
                <p>
                    CONSULTANT INTERVENTIONAL PULMONOLOGIST, INTENSIVISTT & SLEEP MEDICINE SPECIALIST
                </p>
            </div>

            <div className="content">
                <h1 className="heading">BIOGRAPHY</h1>
                <p>
                    &emsp;&emsp;Dr. Jayakumar is one of the reputed Pulmonologist, Sleep Medicine Specialist, Allergist/Immunologist, Intensivist and Infectious disease specialist with a thriving experience of more than 10 years. He is specialized in diagnosing and treating Lung conditions like Asthma, Chronic Cough, COPD, smoking related Lung diseases, Bronchiectasis, Sinusitis, Tuberculosis, Recurrent Pneumonia, Chronic Fever of Unknown Origin, Sleep Apnoea and Sleep related Lung disorders, Pleural Effusion, Acute/Chronic Respiratory Failure, Interstitial Lung disease, Lung Cancer, Eosinophilic Lung disease, Acute respiratory distress syndrome, Cor pulmonale.</p>
                <p>&emsp;&emsp;The doctor has exemplary experience in treating Acute Breathlessness, Chest pain, Hemoptysis, Pneumothorax, Pulmonary Thromboembolism, Acute Severe Asthma, Inhalational Injury and Respiratory Failure. He has the best treatment in Pulmonary hypertension, Sarcoidosis, Vasculitis related Disorders, Occupational Lung Diseases, Pulmonary Disorders in Pregnancy, Neuromuscular Pulmonary Disorder. His supportive care of treatment includes Smoking cessation, Pulmonary rehabilitation, Oxygen therapy, Noninvasive ventilation and Invasive Ventilation, Inhalers and nebulizers, Immunosuppressive drugs, Adult Vaccination, End of Life Care for End Stage Lung Diseases.</p>
                <p>&emsp;&emsp;Dr. Jayakumar maintains a patient centered approach and believes in delivering quality care. He pays close attention to each patient issues in order to comprehend their worries and personalize treatment to their choices. He has done highest number of practical procedures. He hails from Neyveli having completed his DTCD in Madras Medical College and DNB from Apollo Main Hospital Chennai and Fellow in Infectious Diseases. Presented various papers in national and international journals. He worked as a consultant in Apollo KH Hospitals (Ranipet) and now at Dr Adhi Polyclinic (Virudhachalam).
                </p>
            </div>

            <div>
                <h1 className="heading">Education</h1>

                <ul className="row content education-items">
                    <li className="col-lg-4 col-md-6 col-sm-12">MBBS.</li>
                    <li className="col-lg-4 col-md-6 col-sm-12">DTCD.</li>
                    <li className="col-lg-4 col-md-6 col-sm-12">DNB(Respiratory Medicine).</li>
                    <li className="col-lg-4 col-md-6 col-sm-12"> MNAMS.</li>
                    <li className="col-lg-4 col-md-6 col-sm-12">FCID.</li>
                    <li className="col-lg-4 col-md-6 col-sm-12">FIID(Infectious Diseases).</li>
                    <li>EDARM( European diploma in Adult Respiratory Medicine).</li>
                </ul>
            </div>

            <div className="content">
                <h1 className="heading">
                    Experienced in various interventional Procedures
                </h1>

                <div className="aoe-container">

                    <ul className="aoe-items col-lg-6 col-md-6 col-sm-12">
                        <li><span className="icon"></span>&emsp;Bronchoscopy and Bronchoalveolar Lavage (BAL)</li>
                        <li><span className="icon"></span>&emsp;Bronchoscopic Lung Biopsy (TBLB), Cry biopsy</li>
                        <li><span className="icon"></span>&emsp;Bronchoscopic Needle aspiration (TBNA)</li>
                        <li><span className="icon"></span>&emsp;Bronchoscopic Foreign Body Removal</li>
                        <li><span className="icon"></span>&emsp;Medical Thoracoscopy and Biopsy</li>
                        <li><span className="icon"></span>&emsp;Ultrasound (USG) Guided Thoracic Intervention</li>
                        <li><span className="icon"></span>&emsp;Polysomnography (Sleep study)</li>
                    </ul>
                    <ul className="aoe-items col-lg-6 col-md-6 col-sm-12">
                        <li><span className="icon"></span>&emsp;Intercostal Tube Drainage (ICD)</li>
                        <li><span className="icon"></span>&emsp;PIG Tail catheter Drainage</li>
                        <li><span className="icon"></span>&emsp;Bone marrow aspiration and biopsy</li>
                        <li><span className="icon"></span>&emsp;Intrapleural fibrinolysis and Pleurodesis</li>
                        <li><span className="icon"></span>&emsp;Bronchial Stenting</li>
                        <li><span className="icon"></span>&emsp;Bronchial thermoplasty</li>
                        <li><span className="icon"></span>&emsp;Noninvasive ventilation (NIV) &amp; Invasive ventilation (MV)</li>
                        {/* <li><span className="icon"></span>&emsp;Sleep Apnoea and Hypo ventilation</li>
                        <li><span className="icon"></span>&emsp;Upper Airway Diseases</li> */}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutSpecialist;