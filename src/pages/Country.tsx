import { useParams } from "@reach/router";
import React from "react";
import { useQuery } from "@apollo/client";
import { CountriesQuery } from "../graphql/query/Query";
import styled from "styled-components";
import { Link } from "@reach/router";
import AlertMessage from "../components/alert/AlertMessage";

const Country: React.FC = () => {
  const { alpha2Code } = useParams();

  const { loading, error, data } = useQuery(CountriesQuery, {
    variables: { alpha2Code: alpha2Code },
  });

  // console.log(data.countries.edges.map((e: any) => e));

  if (loading) return <AlertMessage message="Loading data" />;
  if (error) return <AlertMessage message="Error" />;

  const country = data.countries.edges[0].node;

  // console.log(country);

  return (
    <SectionGrid>
      <ReturnWrapper>
        <Link to="/">
          <ReturnBtn>Go Back</ReturnBtn>
        </Link>
      </ReturnWrapper>
      <CountryWrapper>
        <Flag>
          <img
            src={country.flag}
            alt={country.name}
            style={{ width: "100%" }}
          />
        </Flag>
        <Information>
          <CountryName>{country.name}</CountryName>
          <CountryProperties>
            <List>
              <li>
                <strong>Native Name: </strong>
                {country.nativeName}
              </li>
              <li>
                <strong>Population: </strong>
                {country.population}
              </li>
              <li>
                <strong>Region: </strong>
                {country.region}
              </li>
              <li>
                <strong>Sub Region: </strong>
                {country.subregion}
              </li>
              <li>
                <strong>Capital: </strong>
                {country.capital}
              </li>
            </List>
            <List>
              <li>
                <strong>Top Level Domain: </strong>
                {country.topLevelDomain}
              </li>
              <li>
                <strong>Currencies: </strong>
                {data.countries.edges[0].node.currencies.edges[0].node.name}
              </li>
              <li>
                <strong>Languages: </strong>
                {data.countries.edges[0].node.languages.edges[0].node.name}
              </li>
            </List>
          </CountryProperties>
        </Information>
      </CountryWrapper>
    </SectionGrid>
  );
};

export default Country;

const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em auto;
  gap: 0px 5em;
  grid-template-areas:
    "btn-row btn-row"
    "country-row country-row";
`;
const ReturnWrapper = styled.div`
  grid-area: btn-row;
  display: flex;
  align-items: center;
  padding: 0 7em;
`;
const ReturnBtn = styled.button`
  background: ${({ theme }) => theme.colors.elements};
  border: none;
  outline: none;
  padding: 1em 1.5em;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.colors.shadowInput};
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
`;
const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "country-flag country-info";
  grid-area: country-row;
`;
const Flag = styled.div`
  grid-area: country-flag;
  width: 70%;
  margin: 0 auto;
`;
const Information = styled.div`
  grid-area: country-info;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CountryName = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  margin-bottom: 1em;
`;
const CountryProperties = styled.div`
  width: 100%;
  display: flex;
  gap: 5em;
`;
const List = styled.ul`
  list-style: none;
  line-height: 2em;
`;
