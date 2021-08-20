import React from "react";
import styled from "styled-components";
import { CardProps } from "../../utils/Interfaces";

const CardItem = ({ data }: CardProps) => {
  return (
    <WrapperCard>
      <Image>
        <img src={data.flag} alt={data.name} style={StyleImg} />
      </Image>
      <Info>
        <Title>{data.name}</Title>
        <List>
          <li>
            {" "}
            <strong>Capital:</strong> {data.capital}
          </li>
          <li>
            {" "}
            <strong>Population:</strong> {data.population}
          </li>
          <li>
            {" "}
            <strong>Region:</strong> {data.region}
          </li>
        </List>
      </Info>
    </WrapperCard>
  );
};

const WrapperCard = styled.div`
  background: ${({ theme }) => theme.colors.elements};
  width: 20em;
  height: 25em;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  display: grid;
  grid-template:
    "image"
    "information";
  border-radius: 5px;
`;

const Image = styled.div`
  grid-area: image;
  height: 175px;
`;

const Info = styled.div`
  padding: 2em 2em;
  grid-area: information;
  text-decoration: none;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 1em;
`;

const List = styled.ul`
  list-style: none;
`;

const StyleImg = {
  maxHeight: "100%",
  width: "100%",
  display: "block",
  margin: "auto",
};
export default CardItem;
