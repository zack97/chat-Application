// import React, { useState } from "react";
// import axios from "axios";

// const AuthPage = (props) => {
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:3003/authenticate", {
//         username,
//       });
//       props.onAuth({ ...response.data, secret: username });
//     } catch (err) {
//       setError("An error occurred during authentication. Please try again.");
//       console.error("Authentication Error:", err);
//     }
//     setLoading(false);
//   };

//   const handleChange = (e) => {
//     setUsername(e.target.value);
//   };

//   return (
//     <div className="background">
//       <form onSubmit={onSubmit} className="form-card">
//         <div className="form-title">Welcome 👋</div>

//         <div className="form-subtitle">Set a username to get started</div>

//         <div className="auth">
//           <div className="auth-label">Username</div>
//           <input
//             className="auth-input"
//             name="username"
//             value={username}
//             onChange={handleChange}
//             required
//           />
//           <button className="auth-button" type="submit" disabled={loading}>
//             {loading ? "Loading..." : "Enter"}
//           </button>
//         </div>
//         {error && <div className="error-message">{error}</div>}
//       </form>
//     </div>
//   );
// };

// export default AuthPage;

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
