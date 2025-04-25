import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Redirect if user did not come from Contact
  useEffect(() => {
    if (!location.state?.fromContact) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  // 2. Prevent back navigation (disable back button)
  useEffect(() => {
    const handlePopState = (e) => {
      navigate("/", { replace: true });
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <div
      style={{
        alignItems: "center",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "50px",
          marginTop: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Thanks! Your message has been sent ✅
      </h2>
      <p style={{ marginTop: "30px", fontSize: "30px" }}>
        Thank you for getting in touch. I’ll respond shortly.
      </p>
    </div>
  );
};

export default SuccessPage;
