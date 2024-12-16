import React, { useState } from 'react';
import '../styles.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!email.includes('@') || password.length < 6) {
            setError('Invalid email or password must be at least 6 characters');
        } else {
            setError('');
            alert('Sign In Successful!');
        }
    };

    return (
        <div className="signin">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
