import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconnect';
export const Login = () => {
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            alert("Đăng nhập thành công!");
            navigate("/");
        }catch(error){
            setError(error.message);
        }
    }
  return (
    
   
    <div className="login-container">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Nhập email" required 
             value={email}
             onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input type="password" placeholder="Nhập mật khẩu" required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            {error && <p className="text-danger">{error}</p>}

          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>

        <p className="register-link">
          Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
        </p>
      </div>
    </div>
   
  )
}
