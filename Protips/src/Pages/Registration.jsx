import React, { useState } from "react";
import "./Form.css";


function Forms() {
  const [alert, setAlert] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Contact: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Contact: "",
  });

  const [focus, setFocus] = useState({
    firstName: false,
    lastName: false,
    Email: false,
    Contact: false,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  }

  function handleFocus(name) {
    setFocus((prevFocus) => ({ ...prevFocus, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let messageBox = { firstName: "", lastName: "", Email: "", Contact: "" };

    // validation
    if (formData.firstName === "") {
      messageBox.firstName = "Please enter your First Name";
    }

    if (formData.lastName === "") {
      messageBox.lastName = "Please enter your Last Name";
    }

    if (formData.Email === "") {
      messageBox.Email = "Please enter your Email";
    }

    if (formData.Contact === "") {
      messageBox.Contact = "Please enter your Contact number";
    }

    setAlert(messageBox);

    if (
      messageBox.firstName === "" &&
      messageBox.lastName === "" &&
      messageBox.Email === "" &&
      messageBox.Contact === ""
    ) {
      setRegistrationSuccess(true);
    }
  }

  return (

       <div className="Forms">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            placeholder="Enter your First Name"
          />
          <div className="error-message">
            {focus.firstName && alert.firstName}
          </div>
        </label>

        <label htmlFor="lastName">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus("lastName")}
            placeholder="Enter your Last Name"
          />
          <div className="error-message">
            {focus.lastName && alert.lastName}
          </div>
        </label>

        <label htmlFor="Email">
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            onFocus={() => handleFocus("Email")}
            placeholder="Enter your Email"
          />
          <div className="error-message">{focus.Email && alert.Email}</div>
        </label>

        <label htmlFor="Contact">
          <input
            type="tel"
            id="Contact"
            name="Contact"
            value={formData.Contact}
            onChange={handleChange}
            onFocus={() => handleFocus("Contact")}
            placeholder="Enter your Contact Number"
          />
          <div className="error-message">{focus.Contact && alert.Contact}</div>
        </label>
        <label htmlFor="">
          <input className="submit" type="submit" value={"Register"} />
        </label>
      </form>

      <div className="register">
        {registrationSuccess && <div>Registration Successful !!</div>}
      </div>
    </div>
  );
}

export default Forms;
