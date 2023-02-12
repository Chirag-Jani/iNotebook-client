import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const signup = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const res = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNzljMDUzMzZiNjllNWYwZGZiYjYxIn0sImlhdCI6MTY3NjEyNjcxNX0.X4SjiB22_SpV-Qc4GgsmhZ7mtwZB81EMCINACXz0Urc",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    let data = await res.json();
    if (data.authToken) {
      navigate("/");
    } else {
      alert("Invalid");
    }
  };

  return (
    <div className="container">
      <form onSubmit={signup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            minLength={5}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            minLength={5}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            minLength={5}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="cpassword"
            value={credentials.cpassword}
            onChange={handleChange}
            minLength={5}
            required
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
