import '../components/login.css'

export function Login() {
    return (
        <>
            <div className='signup-container'>
            <div className="sign-up-box">
                <h2 className='signup-title'>Login</h2>

                <div className="signup-form">
                    
                    <div className="form-group">
                        <p>Registration No.</p>
                        <input type="number" placeholder="Enter registration number" />
                    </div>
                    
                    
                    <div className="form-group">
                        <p>Password</p>
                        <input type="password" placeholder="Password" />
                    </div>
                    
                    <button className='signup-btn' type="submit">Login</button>
                </div>
            </div>
        </div>
        </>
    )
}