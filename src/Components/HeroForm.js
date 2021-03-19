import React from 'react';
function HeroForm() {
    return (
        <div>
            <div className="float-form">
                <div className="custom-wrapper ">
                    <div className="d-flex flex-column flex-md-row align-items-center white-bg">

                        <div className="green-bg flex-fill">
                            <h3>Schedule a Demo</h3>
                            <span>Learn More About FloQast</span>
                        </div>
                        <div className="form-section flex-fill ">
                            <h4 className="text-center">Learn How FloQast Can <span>Improve Your Month-End</span></h4>
                            <form>
                                <div className="form-row">
                                    <div className="col-12 col-sm mb-4 mb-sm-0" >
                                        <input type="text" className="form-control" placeholder="First Name*" />
                                    </div>
                                    <div className="col-12 col-sm">
                                        <input type="email" className="form-control" placeholder="Email*" />
                                    </div>
                                    <div className="col mt-4 mt-sm-0">
                                        <button type="button" className="btn btn-green">schedule now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroForm;