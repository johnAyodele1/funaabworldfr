import React, { useState } from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "/logo.svg";
const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #218838;
  }
`;

export default function AddProduct() {
  const category = [
    "Choose a category",
    "Oil & More",
    "Fruits & Vegetables",
    "Cleaning & Essentials",
    "Personal & Care",
    "Sauces & Spreads",
    "Snacks & Munchies",
    "Tea & Coffee",
    "Chicken & Meat",
    "Drinks & Juices",
    "Dairy & Breads",
    "Home & Offices",
    "Organic & Instant",
    "Bakery & Biscuits",
  ];
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedImage, setSelectedImage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    seller: user.user._id,
    price: "",
    description: "",
    category: "",
    size: "",
    image: null,
  });

  if (!user) {
    return <Navigate to="/" replace />;
  }
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setSelectedImage(e.target.files[0].name);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("seller", formData.seller);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("size", formData.size);
    if (formData.image) {
      data.append("image", formData.image);
    }

    fetch("http://127.0.0.1:3000/createproduct", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your product has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          alert(res.message);
        }
        console.log(res);
      });
    navigate("/");
  };

  return (
    <Container>
      <Title>
        <img
          src={logo}
          alt="logo"
          style={{
            display: "block",
            width: "8rem",
          }}
        />{" "}
        <div
          style={{
            display: "block",
          }}
        >
          Add New Product
        </div>
      </Title>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="price"
          placeholder="Price (e.g. ₹99)"
          onChange={handleChange}
          required
        />
        <TextArea
          name="description"
          placeholder="Product Description"
          rows="4"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="size"
          placeholder="Size (e.g. 500g)"
          onChange={handleChange}
          required
        />
        <Select name="category" onChange={handleChange} required>
          {category.map((el) => (
            <option value={el.split("&").join("").split(" ").join("")}>
              {el}
            </option>
          ))}
        </Select>
        <Input type="file" name="image" onChange={handleChange} />
        {selectedImage && (
          <p
            style={{
              color: "black",
              fontSize: "1.1rem",
              margin: "0",
              opacity: "95%",
              textAlign: "center",
            }}
          >
            Selected Image:{" "}
            <span
              style={{
                opacity: "80%",
              }}
            >
              {selectedImage}
            </span>
          </p>
        )}
        <Button type="submit">Submit Product</Button>
      </Form>
    </Container>
  );
}
