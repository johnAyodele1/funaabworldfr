import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 13rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 1px 1px 1px rgba (0, 0, 0, 0.1);
  background: white;
  text-align: center;
  height: 18rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 7rem;
  border-radius: 0.5rem;
`;

const DeliveryTime = styled.div`
  color: black;
  opacity: 85%;
  font-size: 0.7rem;
  word-spacing: -1px;
  font-weight: bold;
  display: flex;
  width: 4rem;
  border-radius: 1.25rem;
  background-color: rgb(234, 238, 235);
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  &::before {
    content: "⏳";
    margin-right: 0.3rem;
  }
`;

const ProductName = styled.div`
  font-weight: 600;
  margin-top: 0.5rem;
  font-size: 1rem;
  height: 3rem;
  color: black;
  opacity: 85%;
  width: 10rem;
  text-align: start;
`;

const ProductSize = styled.div`
  font-weight: 400;
  margin-top: 0.5rem;
  font-size: 1rem;
  letter-spacing: 1px;
  color: black;
  opacity: 85%;
  width: 10rem;
  text-align: start;
  color: #555;
`;
const ProductDiv = styled.div`
  overflow: hidden;
  padding: 0.5rem;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  opacity: 85%;
  margin-top: 0.5rem;
  color: black;
`;

const AddButton = styled.button`
  background-color: rgb(247, 255, 249);
  color: #0c831f;
  width: 66px;
  height: 31px;
  border: 1px solid rgb(49, 134, 22);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
`;

const Product = (props) => {
  const [cart, setCart] = useState([]);
  const cartItem = function () {
    setCart((prev) => prev + 1);
  };

  return (
    <Card>
      <ProductDiv>
        <ProductImage
          src={props.image}
          alt="Product"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ProductDiv>
      <div>
        <DeliveryTime>{props.time}</DeliveryTime>
        <ProductName>{props.name}</ProductName>

        <ProductSize>{props.size}</ProductSize>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Price>{props.price}</Price>
          <AddButton onClick={cartItem}>ADD</AddButton>
        </div>
      </div>
    </Card>
  );
};

export default Product;
