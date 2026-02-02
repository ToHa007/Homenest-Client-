import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { signInUser, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      return Swal.fire("Error", "Please fill in all fields", "error");
    }

  
    signInUser(email, password)
      .then(() => {
        Swal.fire("Success", "Login successful!", "success");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  const handleGoogleLogin = () => {
    signInwithGoogle()
      .then(() => {
        Swal.fire("Success", "Logged in with Google", "success");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center shadow-xl px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
          <p className="text-center text-gray-500 mb-6">
            Welcome back! Please login to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5"
            />
            Continue with Google
          </button>

          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="link link-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
