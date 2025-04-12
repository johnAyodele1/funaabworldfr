import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
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
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product Submitted:", formData);

    // You can use FormData to send this to backend via fetch/axios
  };

  return (
    <Container>
      <Title>Add New Product</Title>
      <Form onSubmit={handleSubmit}>
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
        <Select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="grocery">Grocery</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="pet">Pet Care</option>
          <option value="baby">Baby Essentials</option>
        </Select>
        <Input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <Button type="submit">Submit Product</Button>
      </Form>
    </Container>
  );
}
