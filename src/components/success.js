import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  useEffect(() => {
    redirectToHome();
  }, []);

  return (
    <div className="successpara">
      <p>
        Successfully submitted. Will redirect you to home page in 3 seconds.
      </p>
    </div>
  );
}

export default Success;
