
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconnect";
import { Link, useNavigate } from "react-router-dom";

// HÀM KIỂM TRA LỖI ĐÁNH MÁY TÊN MIỀN
const checkEmailTypos = (email) => {
  const domain = email.split('@')[1];

  if (!domain) return false;

  const commonTypos = [
    'gmeo.com', 'gail.com', 'gmal.com', 'gmil.com',
    'hotmal.com', 'outloook.com',
    'yhaoo.com', 'yahho.com'
  ];

  return commonTypos.includes(domain.toLowerCase());
};

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Hàm xử lý đăng ký
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError(" Mật khẩu xác nhận không khớp.");
      return;
    }

    // ÁP DỤNG KIỂM TRA TÊN MIỀN
    if (checkEmailTypos(email)) {
      setError("⚠️ Tên miền email có vẻ bị sai chính tả. Vui lòng kiểm tra lại.");
      return;
    }
    

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Đăng ký thành công! Hãy đăng nhập.");
      navigate("/login");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("⚠️ " + err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>REGISTER</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>

          <button type="submit" className="btn-register">
            Đăng ký
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <p className="login-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};