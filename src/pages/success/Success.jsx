import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, []);
  return (
    <div>
      payment successfull. you are being redirected to orders page .please do
      not close the page
    </div>
  );
};

export default Success;
