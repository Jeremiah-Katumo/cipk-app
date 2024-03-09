// import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../public/assets/css/main.css";
// import Parse from 'parse/dist/parse.min.js';
import { useGlobalContext } from  "../../context/GlobalContext";
import { isAuth, signUp } from "../actions/auth";
// import Router from 'next/router';

export default function Register() {
    const { setValues, values } = useGlobalContext();

    // const [ username, setUsername ] = useState("");
    // const [ email, setEmail ] = useState("");
    // const [ password, setPassword ] = useState("");
    // const [ error, setError]  = useState(false);
    // const [ inputState, setInputState ] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //     error: false,
    //     loading: false,
    // });

    const { username, name, email, password } = values || {};
    const [error, setError] = useState();

    const loginForm = useRef()
    const formContent = useRef()
    const navigate = useNavigate();

    const handleInput = name => e => {
        setValues({...values, error, [name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // sendRegister(inputState); // send the payload
        setValues({...values, error: false});
        const user = { username, name, email, password };

        signUp(user)
            .then(data => {
                if (error) {
                    setError({ ...values })
                } else {
                    setValues({ 
                        ...values, 
                        username: '',
                        name: '',
                        email: '',
                        password: '',
                    })

                    navigate('/login');
                }
            })
    };

    useEffect(() => {
        isAuth() && navigate('/login');
    }, [navigate])

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     sendRegister(inputState);

    //     try {
    //         const res = await axios.post("/register", {
    //             username,
    //             email,
    //             password,
    //         });
    //         res.data && window.location.replace("/login");
    //     } catch (err) {
    //         setError(true);
    //     }
    // }

    // const [name, setName] = useState();
    // const [email,setEmail] = useState();
    // const [password, setPassword] = useState();
    // // const navigate = useNavigate();
    // // const [error, setError] = useState();

    // // const BASE_URL = 'http://localhost:5000'

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/register', {name, email, password})
    //         .then(result => {console.log(result)
    //             // navigate('/login')
    //         })
    //         .catch(err => console.error('AxiosError:', err))
    // }

    // const doUserRegistration = async function () {
    //     // Note that these values come from state variables that we've declared before
    //     const usernameValue = name;
    //     const emailValue = email;
    //     const passwordValue = password;
        
    //     try {
    //         // Since the signUp method returns a Promise, we need to call it using await
    //         const createdUser = await Parse.User.signUp(usernameValue, emailValue, passwordValue);
    //         alert(
    //             `Success! User ${createdUser.getUsername()} was successfully created!`
    //         );
    //         return true;
    //     } catch (error) {
    //         // signUp can fail if any parameter is blank or failed an uniqueness check on the server
    //         alert(`Error! ${error}`);
    //         return false;
    //     }
    //   };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit} ref={loginForm}>
                <div className="registerForm" ref={formContent}>
                    {
                        error && <div className="error">
                            <h4>Error: </h4>
                            <li>
                                <p>{error}</p>
                            </li>
                        </div>
                    }
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        name={'username'}
                        className="registerInput"
                        placeholder="Enter your username..."
                        onChange={handleInput('username')}
                        required
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        name={'name'}
                        className="registerInput"
                        placeholder="Enter your name..."
                        onChange={handleInput('name')}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        name={"email"}
                        className="registerInput"
                        placeholder="Enter your email..."
                        onChange={handleInput('email')}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        name={"password"}
                        className="registerInput"
                        placeholder="Enter your password..."
                        onChange={handleInput('password')}
                        required
                    />
                    <button className="registerButton" type="submit">Register</button>
                </div>
            </form>
            <button type='primary' className="registerLoginButton">
                <Link className="link" to="/login"> Login </Link>
            </button>
            {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
        </div>
    );
}

// export default Register;

// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import Parse from 'parse/dist/parse.min.js';
// import '../../public/assets/css/main.css';

// class Register extends Component {
//     constructor() {
//         super()
//             this.state = {
//                 name:"",
//                 email:"",
//                 password:""
//             }
            
//             this.changeName = this.changeUsername.bind(this);
//             this.changeEmail = this.changeEmail.bind(this);
//             this.changePassword = this.changePassword.bind(this);
//             this.onSubmit = this.onSubmit.bind(this);
//     }
        
//     changeUsername(event) {
//         this.setState({
//             name: event.target.value
//         });
//     }
//     changeEmail(event) {
//         this.setState({
//             email: event.target.value
//         });
//     }
//     changePassword(event) {
//         this.setState({
//             password: event.target.value
//         });
//     }
    
//     onSubmit(event) {
//         event.preventDefault()

//         const registered = {
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         }

//         axios.post("http://localhost:5000/register", registered)
//             .then(response => console.log(response.data))
//             .catch(err => console.error(err))

//             this.setState({
//                 name:"",
//                 email:"",
//                 password:""
//             });
//     }

//     onUserRegistration() {
//     // Note that these values come from state variables that we've declared before
//         const registered = {
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         }
        
//         try {
//             // Since the signUp method returns a Promise, we need to call it using await
//             const createdUser = Parse.User.signUp(registered);
//             alert(
//                 `Success! User ${createdUser.getUsername()} was successfully created!`
//             );
//             return true;
//         } catch (error) {
//             // signUp can fail if any parameter is blank or failed an uniqueness check on the server
//             alert(`Error! ${error}`);
//             return false;
//         }
//     };


//     render() {
//         return(
//             <div className="register">
//                 <span className="registerTitle">Register</span>
//                 <form className="registerForm" onSubmit={this.onSubmit}>
//                     <label>Username</label>
//                     <input
//                         type="text"
//                         name='name'
//                         className="registerInput"
//                         placeholder="Enter your username..."
//                         onChange={this.changeName} value={this.state.name}
//                         required
//                     />
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         className="registerInput"
//                         placeholder="Enter your email..."
//                         onChange={this.changeEmail} value={this.state.email}
//                         required
//                     />
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         className="registerInput"
//                         placeholder="Enter your password..."
//                         onChange={this.changePassword} value={this.state.password}
//                         required
//                     />
//                     <button className="registerButton" type="submit">Register</button>
//                 </form>
//                 <button type='primary' className="registerLoginButton" onChange={this.onSubmit} onClick={this.onUserRegistration}>
//                     <Link className="link" to="/login"> Login </Link>
//                 </button>
//                 {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
//             </div>
//         );
//     }
// }

// export default Register;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import { Alert } from 'react-native';
// import '../../public/assets/css/main.css';

// function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     // const navigate = useNavigate();

//     const onSubmit = () => {
//         if (password !== confirmPassword) {
//             // Alert.alert('Passwords do not match');
//             console.log('Password do not match')
//         } else {
//             fetch('http://localhost:5000/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/javascript',
//                 },
//                 body: JSON.stringify({ name, email, password }),
//             })
//                 .then(res => {console.log(res.data.json())
//                     // navigate('/login');
//                 })
//                 .catch(err => console.error(err));
//         }
//     }

//     return(
//         <div className="register">
//             <span className="registerTitle">Register</span>
//             <form className="registerForm" onSubmit={onSubmit}>
//                 <label>Username</label>
//                 <input
//                     type="text"
//                     name='name'
//                     className="registerInput"
//                     placeholder="Enter your username..."
//                     onChange={e => setName(e.target.value)} value={name}
//                     required
//                 />
//                 <label>Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     className="registerInput"
//                     placeholder="Enter your email..."
//                     onChange={e => setEmail(e.target.value)} value={email}
//                     required
//                 />
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     className="registerInput"
//                     placeholder="Enter your password..."
//                     onChange={e => setPassword(e.target.value)} value={password}
//                     required
//                 />
//                 <label>Confirm Password</label>
//                 <input
//                     type="password"
//                     name="confirmPassword"
//                     className="registerInput"
//                     placeholder="Confirm your password..."
//                     onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
//                     required
//                 />
//                 <button className="registerButton" type="submit">Register</button>
//             </form>
//             <button type='primary' className="registerLoginButton" >
//                 <Link className="link" to="/login"> Login </Link>
//             </button>
//             {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
//         </div>
//     );
// }

// export default Register;