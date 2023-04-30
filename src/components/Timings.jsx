import React from "react";

function Timings() {
    return (
        <section>
            <div className="content">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="heading timing-heading">OPD Hours</h1>
                        <p className="timing-para clinic-name">At Dr. Adhi Polyclinic, Virudhachalam</p>
                        <div className="timings">
                            <p>Monday</p>
                            <div><p>9:00 AM - 2:00 PM</p>
                                <p>6:00 PM - 8:00 PM</p></div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Tuesday</p>
                            <div><p>9:00 AM - 2:00 PM</p>
                                <p>6:00 PM - 8:00 PM</p></div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Wednesday</p>
                            <div><p>9:00 AM - 2:00 PM</p>
                                <p>6:00 PM - 8:00 PM</p></div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Thursday</p>
                            <div><p>9:00 AM - 2:00 PM</p>
                                <p>6:00 PM - 8:00 PM</p></div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Friday</p>
                            <div><p>9:00 AM - 2:00 PM</p>
                                <p>6:00 PM - 8:00 PM</p></div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Saturday</p>
                            <div><p>9:00 AM - 2:00 PM</p>
                                <p>6:00 PM - 8:00 PM</p></div>
                        </div>

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="heading timing-heading vch">Visiting Consultant At</h1>

                        <div className="timings timings-vch">
                            <p>Monday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 5:00 PM</p>
                                <p className="timing-para">Sudha Hospital, Vadalur.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Tuesday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 5:00 PM</p>
                                <p className="timing-para">Gokula Raja Medicals, Jayakondam.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Wednesday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 5:00 PM</p>
                                <p className="timing-para">Shahid Speciality Clinic, Chidambaram.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Thursday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 5:00 PM</p>
                                <p className="timing-para">Mahalakshmi Hospital,
                                    Ulundhurpet.</p>
                                <p>5:00 PM - 7:00 PM</p>
                                <p className="timing-para">Sri Sri Clinic & Medicals, Shrimooshnam.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Friday</p>
                            <div className="timings-content">
                                <p>5:00 PM - 8:00 PM</p>
                                <p className="timing-para">
                                    BMP Pharmacy Clinic, Neyveli Township.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timings;