import React from "react";

function LogInForm({ onLogIn }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        console.log("form submitted", event.target);
        const form = event.target;
        const elements = form.elements;
        const email = elements.email.value;
        const password = elements.password.value;
        console.log({ email, password });
        onLogIn({ email, password });
      }}
    >
      <label className="mb-3">
        {"Email: "}
        <input type="email" name="email" id="email" />
      </label>
      <label className="mb-3">
        {"Password: "}
        <input type="password" name="password" id="password" />
      </label>
      <button>Log In</button>
    </form>
  );
}

export default LogInForm;
