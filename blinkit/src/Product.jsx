import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 13rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 1px 1px 1px rgba (0, 0, 0, 0.1);
  background: white;
  text-align: center;
  height: 16rem;
  display: grid;
  grid-template-rows: 1fr 2fr;
  //   overflow: hidden;
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
const ProductDiv = styled.div`
  color: #555;
  font-size: 0.75rem;
`;

const Price = styled.div`
  overflow: hidden;
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
  &:hover {
    background-color: #45a049;
  }
`;

const Product = (props) => {
  return (
    <Card>
      <ProductDiv>
        <ProductImage src={props.image} alt="Product" />
      </ProductDiv>
      <div>
        <DeliveryTime>{props.time}</DeliveryTime>
        <ProductName>{props.name}</ProductName>
        <ProductSize>{props.size}</ProductSize>
        <Price>{props.price}</Price>
        <AddButton>ADD</AddButton>
      </div>
    </Card>
  );
};

export default Product;
