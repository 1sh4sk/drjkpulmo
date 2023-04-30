import React from "react";

function ReachUs() {
    return (

        <div className="content">

            <h1 className="heading">Reach Us</h1>

            <div className="row">
                <div className="details col-lg-6 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="Icon">
                            <i class="fa-icon fa-solid fa-phone fa-2xl"></i>
                        </div>
                        <div className="text">
                            <h4>Call Us Now:</h4>
                            <p>Cell: +91 9629191821</p>
                            <p>WhatsApp: +91 9629191821</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="Icon">
                            <i class="fa-icon fa-solid fa-location-dot fa-2xl"></i>
                        </div>
                        <div className="text">
                            <h4>Visit Our Clinic:</h4>
                            <p>Dr Adhi Polyclinic, 809, Junction Rd, College Nagar, VIrudhachalam, Tamil Nadu - 606 001</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="Icon">
                            <i class="fa-icon fa-solid fa-envelope fa-2xl"></i>
                        </div>
                        <div className="text">
                            <h4>Send A Message:</h4>
                            <p className="Link">jkpulmocare@gmail.com</p>
                        </div>
                    </div>
                    <div className="Box">
                    <Link to="tel:9629191821"><button type="button" className="btn btn-primary btn-lg appointment-btn">Book Appointment</button></Link>
                    </div>
                </div>



                <div className="Map col-lg-6 col-md-6 col-sm-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.434453517827!2d79.32148471744384!3d11.5206605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab4a7003d2bae9%3A0x9eda257ef2a4c3ff!2sDr%20Adhi%20Polyclinic!5e0!3m2!1sen!2sin!4v1682864047373!5m2!1sen!2sin"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>

    );
}

export default ReachUs;