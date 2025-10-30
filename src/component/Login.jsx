
import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseconnect';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      const user = userCredential.user;

     
      // Kiểm tra xem người dùng đã nhấp vào link trong email chưa
      if (user.emailVerified) {
        // Đã xác thực, cho phép vào
        alert("Đăng nhập thành công!");
        navigate("/poster");
      } else {
        // Chưa xác thực, báo lỗi và đăng xuất họ ra
        setError("Bạn chưa xác thực email. Vui lòng kiểm tra hộp thư của bạn (kể cả thư rác) và nhấp vào link kích hoạt.");
        await auth.signOut(); 
      }
      
    } catch (err) {
      // Xử lý lỗi sai mật khẩu, không tìm thấy user
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
      } else {
        // lỗi khác
        setError(err.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>ĐĂNG NHẬP</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Nhập email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input 
              type="password" 
              placeholder="Nhập mật khẩu" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-danger" style={{color: 'red'}}>{error}</p>}

          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>

        <p className="register-link">
          Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};