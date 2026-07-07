"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="demo-one">
      <HeaderOne />
      <div className="rts-navigation-area-breadcrumb bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navigator-breadcrumb-wrapper">
                <Link href="/">Home</Link>
                <i className="fa-regular fa-chevron-right" />
                <a className="current">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-seperator bg_light-1">
        <div className="container">
          <hr className="section-seperator" />
        </div>
      </div>
      <div className="rts-register-area rts-section-gap bg_light-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="registration-wrapper-1">
                <div className="logo-area mb--0">
                  <Link href="/">
                    <img className="mb--10" src="/assets/images/logo/orrdr.svg" alt="logo" />
                  </Link>
                </div>
                <h3 className="title">Login Into Your Account</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="registration-form">
                  <div className="input-wrapper">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="password">Password*</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="rts-btn btn-primary">Login Account</button>
                  <div className="another-way-to-registration">
                    <div className="registradion-top-text">
                      <span>Or Register With</span>
                    </div>
                    <div className="login-with-brand">
                      <a href="#" className="single">
                        <img src="/assets/images/form/google.svg" alt="login" />
                      </a>
                      <a href="#" className="single">
                        <img src="/assets/images/form/facebook.svg" alt="login" />
                      </a>
                    </div>
                    <p>
                      Don&apos;t have Account? <Link href="/register">Registration</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}
