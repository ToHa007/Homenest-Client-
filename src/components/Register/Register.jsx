import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

   
    if (!/[A-Z]/.test(password)) {
      return Swal.fire("Error", "Password must contain at least one uppercase letter", "error");
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire("Error", "Password must contain at least one lowercase letter", "error");
    }
    if (password.length < 6) {
      return Swal.fire("Error", "Password must be at least 6 characters long", "error");
    }

    
    createUser(email, password)
      .then((result) => {
   
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        Swal.fire("Success", "Registration successful!", "success");
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
          <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and explore more
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
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
              Register
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
            Already have an account?{" "}
            <Link to="/login" className="link link-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
