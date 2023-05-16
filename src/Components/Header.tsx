import React from 'react';

const Header = () => {
    return (
        <div className="card rounded-0">
            <div className="row ">
                <div className="col data">
                        <h1 className="card-title">Make money driving with bolt</h1>
                        <p className="card-text">Become a Bolt driver, set your schedule and earn extra money by driving!</p>
                        <p className="card-text dropdown-toggle" data-toggle="dropdown">LEARN MORE</p>
                    
                </div>
                <div className="col data">
                    
                        <div className="card-body">
                        
                            <h5 >Become a Bolt driver</h5>
                            <p >If you have multiple cars or drivers <a className="link" href='#'>sign up as a fleet owner</a></p>

                            <form action="/action_page.php" >
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required/>
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="phonenumber">Phonenumber:</label>
                                    <div className='side-by-side'>
                                    <select className="select form-control col-sm-3 form-select" aria-label="Default select example" id="phonenumber">
                                        <option value="1">+234</option>
                                        <option value="2">+321</option>
                                        <option value="3">+432</option>
                                        <option value="4">+243</option>
                                    </select>
                                    <input type="text" className="form-control col-sm-9" id="phonenumber" placeholder="Enter phonenumber" name="phonenumber" required/>
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City:</label>
                                    <select className="form-control form-select" aria-label="Default select example" name="city" required>
                                        <option value="0" selected disabled>Select city</option>
                                        <option value="1">Accra</option>
                                        <option value="2">Kumasi</option>
                                        <option value="3">Tamale</option>
                                    </select>
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group form-check">
                                    <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" required/> I agree to Bolt's <a className="link" href='#'> Terms of Service </a>  
                                    and <a className="link" href='#'>Privacy Policy.</a>
                                    <div className="valid-feedback">Valid.</div>
                                    <div className="invalid-feedback">Check this checkbox to continue.</div>
                                    </label>
                                </div>
                                <div className="col-md-12 text-center">
                                <button type="submit" className="form-btn btn btn-default rounded-5">SIGN UP AS A DRIVER</button>
                                </div>
                            </form>
                        </div>
                    
                </div>
            </div>
    </div>
    )
}

export default Header