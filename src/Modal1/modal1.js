import React from "react";
import "../Modal1/modal.css";
import { getToken } from '../api/api';
import { Link } from "react-router-dom";



export default function Modal() {
  const login = async() => {
    await getToken();
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Let's start</h2>
      <Link to ="/music">< button className="btn-modal" onClick={login}>Login</button></Link>
      </div>
    </div>
  );
}