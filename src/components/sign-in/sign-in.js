import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./styles.scss";

class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = async evt => {
        evt.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""
            });
        } catch (err) {
            console.log(err);
        }
    };

    handleChange = evt => {
        const { value, name } = evt.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton
                            type="submit"
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
