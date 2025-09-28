import '../components/sign-up.css'

export function SignUp() {
    return (
        <>
        <div className='signup-container'>
            <div className="sign-up-box">
                <h2 className='signup-title'>Sign Up</h2>

                <div className="signup-form">
                    <div className="form-group">
                        <p>Name</p>
                        <input type="text" placeholder="Enter your full name" />
                    </div>
                    
                    <div className="form-group">
                        <p>Registration No.</p>
                        <input type="number" placeholder="Enter registration number" />
                    </div>
                    
                    <div className="form-group">
                        <p>Year</p>
                        <select>
                            <option value="">Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <p>Semester</p>
                        <select>
                            <option value="">Select Semester</option>
                            <option value="1">1st Semester</option>
                            <option value="2">2nd Semester</option>
                            <option value="3">3rd Semester</option>
                            <option value="4">4th Semester</option>
                            <option value="5">5th Semester</option>
                            <option value="6">6th Semester</option>
                            <option value="7">7th Semester</option>
                            <option value="8">8th Semester</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <p>Email</p>
                        <input type="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <p>Phone number</p>
                        <input type="number" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="form-group">
                        <p>Password</p>
                        <input type="password" placeholder="Create a password" />
                    </div>
                    
                    <div className="form-group">
                        <p>Confirm Password</p>
                        <input type="password" placeholder="Confirm your password" />
                    </div>
                    
                    <button className='signup-btn' type="submit">Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )
}