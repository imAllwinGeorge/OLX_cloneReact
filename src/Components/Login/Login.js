import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/firebaseContext';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const [error, setError] = useState(null); 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  // const handleSubmit = (e)=>{
  //     e.preventDefault();
  //     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  //       history.push('/')
  //     }).catch((error)=>{
  //       alert(error.message)
  //     })
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (err) {
      setError(err.message); // Set error message
      console.log(err.message)
      alert(err.message)
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          {error && <p className="error">{error}</p>} 
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
