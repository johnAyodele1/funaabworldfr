import React, { useState } from "react";
import logo from "./warehouse/blinkit_logo.webp";
import masthead from "./warehouse/warehouse-desktop-masthead.webp";
import styles from "./Warehouse.module.css";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import img1 from "./warehouse/warehouse-icon-medical_1.webp";
import img2 from "./warehouse/warehouse-icon-shift_1.webp";
import img3 from "./warehouse/warehouse-icon-salary_1.webp";
import img4 from "./warehouse/warehouse-icon-transportation_1.webp";
const Warehouse = () => {
  const navigate = useNavigate();
  const navLinks = ["Home", "About", "Careers", "Partner", "Blog"];
  const input = [
    { ph: "your full name*,", name: "name" },
    { ph: "phone number*", name: "phoneNumber" },
    { ph: "city*", name: "city" },
    { ph: "state*", name: "state" },
  ];
  const clickBait = [
    {
      text: "$25,000",
      img: img3,
    },
    {
      text: "9 hours shift",
      img: img2,
    },
    {
      text: "Transportation",
      img: img4,
    },
    {
      text: "Medical insurance",
      img: img1,
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    state: "",
    education: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleEdu = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, education: value });
  };
  const consoleForm = (e) => {
    e.preventDefault();
    fetch(
      "https://funaabworld-production-64e9.up.railway.app/employee/createprofile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          alert("Profile Created Successfully");
          navigate("/");
        } else {
          alert(res.message);
        }
        console.log(res);
      });
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.color}>
        <nav className={styles.nav}>
          <div>
            <img src={logo} className={styles.logo} />
          </div>
          <div>
            <ul className={styles.navLinks}>
              {navLinks.map((el) => (
                <li>
                  <Link to={"/" + el.toLowerCase()}>{el}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className={styles.hero}>
          <div>
            <img src={masthead} alt="masthead" className={styles.masthead} />
          </div>
          <div className={styles.register}>
            <h1>Come bring orders to life</h1>
            <p>Earn more with a job in our warehouse</p>
            <div className={styles.form}>
              {input.map((el) => (
                <input
                  name={el.name}
                  placeholder={el.ph}
                  onChange={handlechange}
                />
              ))}
              <select className={styles.edu} onChange={handleEdu}>
                <option value="highest education*">highest education*</option>
                <option value="BSc">BSC</option>
                <option value="SSCE">SSCE</option>
              </select>
              <button className={styles.btnRe} onClick={consoleForm}>
                register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.heading}>
          <h1>Join India's most loved grocery shopping platform</h1>
          <p>
            Become a warehousepartner and get best in class pay, plus benefits
            like nutritious meals, transportation facilities, provident funds-
            in addition to salary, medical insurance coverage and 14 days leave
            for covid
          </p>
        </div>
        <div className={styles.clickBait}>
          {clickBait.map((el) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                height: "35vh",
                borderRadius: ".3rem",
                boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.431)",
                paddingTop: "1.5rem",
              }}
            >
              <img src={el.img} />
              <h2>{el.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
