import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";


function Signup() {
    const [inputValue, setInputValue] = useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                username: inputValue.username,
                email: inputValue.email,
                password: inputValue.password,
            };

            const res = await axios.post(
                "https://stockflow-trading-plateform-backend.onrender.com/signup",
                payload
            );

            console.log(res.data);
            alert(res.data.message || "Signup Successful");
            setInputValue({
                username: "",
                email: "",
                password: "",
            });
            navigate("/");
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={inputValue.username}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={inputValue.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputValue.password}
                onChange={handleChange}
            />

            <button type="submit">
                Signup
            </button>
        </form>
    );
}

export default Signup;
