import React from "react";

function Button({ name, logo }) {
  console.log({ name, logo });
  return (
    <div>
      <button className={name == "Email" ? "email" : "linkedin"}>
        <p className={name == "Email" ? "email-text" : "linkedin-text"}>
          {name}
        </p>
      </button>
    </div>
  );
}

export default Button;
