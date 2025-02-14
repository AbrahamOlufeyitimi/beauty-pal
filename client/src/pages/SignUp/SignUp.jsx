import { useState } from "react";
import glammedup from "../../assets/images/glammedup.jpg";
import "./SignUp.scss";


const SignUp = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="container">
            <div className="container__img">
                <img src={glammedup} className="container__img-picture" alt="charts picture" />
            </div>

            <div className="container__form">
                <h2 className="container__form-title">{isSignUp ? "Sign Up" : "Log In"}</h2>

                <form className="container__form-fields">

                    {isSignUp && (
                    <input type="text" placeholder="Full Name" required className="container__form-input" />
                    )}
                    <input type="email" placeholder="Email" required className="container__form-input" />
                    <input type="password" placeholder="Password" required className="container__form-input" />

                    
                    <button type="submit" className="container__form-button">{isSignUp ? "Sign Up" : "Log In"}</button>

                    {isSignUp && (
                    <p className="container__form-link" onClick={toggleForm}>Already signed up? Log in</p>
                    )}

                    {!isSignUp && (
                    <p className="container__form-link" onClick={toggleForm}>Don't have an account? Sign Up</p>
                    )}
                </form>
            </div>
        </div>

    );
};

export default SignUp;