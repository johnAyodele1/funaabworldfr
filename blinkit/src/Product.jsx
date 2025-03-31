import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 13rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background: white;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const DeliveryTime = styled.div`
  color: green;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  &::before {
    content: "⏳";
    margin-right: 0.3rem;
  }
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const ProductSize = styled.div`
  color: #555;
  font-size: 0.75rem;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  &:hover {
    background-color: #45a049;
  }
`;

const Product = (props) => {
  return (
    <Card>
      <ProductImage src="https://via.placeholder.com/150" alt="Product" />
      <DeliveryTime>{props.time}</DeliveryTime>
      <ProductName>{props.name}</ProductName>
      <ProductSize>{props.size}</ProductSize>
      <Price>{props.price}</Price>
      <AddButton>ADD</AddButton>
    </Card>
  );
};

export default Product;
