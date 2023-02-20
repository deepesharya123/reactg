import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home Page
      <button>
        <Link to="order-summary">Place Order</Link>
      </button>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        {" "}
        Place Order 2
      </button>
    </div>
  );
}

export default Home;
