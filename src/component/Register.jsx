
  import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebaseconnect";
import { Link} from "react-router-dom";

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
  // 4. Thêm state để kiểm soát giao diện
  const [isRegistered, setIsRegistered] = useState(false);
 

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    if (checkEmailTypos(email)) {
      setError("⚠️ Tên miền email có vẻ bị sai chính tả. Vui lòng kiểm tra lại.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      await sendEmailVerification(userCredential.user);

      setIsRegistered(true);
      setError(""); 
      
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("⚠️ Email này đã được sử dụng.");
      } else if (err.code === "auth/weak-password") {
        setError("⚠️ Mật khẩu quá yếu, vui lòng đặt mật khẩu ít nhất 6 ký tự.");
      } else {
        setError("⚠️ " + err.message);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        
       
        {!isRegistered ? (
          <>
            <h2>TẠO TÀI KHOẢN</h2>
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
              
              {error && <p className="error-text" style={{color: 'red'}}>{error}</p>}
              
              <button type="submit" className="btn-register">
                Đăng ký
              </button>
            </form>
            <p className="login-link">
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </>
        ) : (
          // GIAO DIỆN THÔNG BÁO SAU KHI ĐĂNG KÝ
          <div className="registration-success">
            <h2 style={{color: 'green'}}>Đăng ký thành công!</h2>
            <p style={{textAlign: 'center', lineHeight: '1.6'}}>
              Chúng tôi đã gửi một email xác thực đến:
              <br />
              <strong>{email}</strong>
            </p>
            <p style={{textAlign: 'center', lineHeight: '1.6'}}>
              Vui lòng kiểm tra hộp thư (kể cả thư rác) và 
              <strong> nhấp vào đường link</strong> 
              bên trong để kích hoạt tài khoản của bạn.
            </p>
            <p style={{textAlign: 'center', marginTop: '20px'}}>
              Sau khi xác thực, bạn có thể quay lại trang đăng nhập.
            </p>
            <Link to="/login" className="btn-login" style={{textDecoration: 'none', textAlign: 'center', display: 'block', marginTop: '20px'}}>
              Đi đến trang Đăng nhập
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};