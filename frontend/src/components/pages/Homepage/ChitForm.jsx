import React, { useState } from "react";
import chitService from "../../../services/chit.service.js";
import "./ChitForm.css";

const ChitForm = () => {
  const [chit, setChit] = useState("");

  const handleSubmit = async () => {
    if (chit === "") {
      alert("Chit cannot be empty");
      return;
    }
    postChit();
  };

  const postChit = async () => {
    console.log(chit);
    const user = JSON.parse(localStorage.getItem("user"));
    const time = new Date();
    const content = chit;
    const res = await chitService.chit(user, content, time);
    console.log(res);
    if (res.error) {
      console.log(res.error);
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Chit</h1>
      <textarea
        className="chit-textarea"
        type="text"
        name="chit"
        placeholder="Chit..."
        value={chit}
        onChange={(event) => setChit(event.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>{" "}
    </div>
  );
};
export default ChitForm;
