import React from "react";
import { useQuery } from "@apollo/client";
import { CountriesQuery } from "../../graphql/query/Query";
import CardItem from "../card/CardItem";
import AlertMessage from "../alert/AlertMessage";
import { Link } from "@reach/router";
import styled from "styled-components";

interface Props {
  search: string;
  region: string;
}

const MainContent: React.FC<Props> = ({ search, region }) => {
  const { loading, error, data, fetchMore } = useQuery(CountriesQuery, {
    variables: { query: search, region: region, after: null },
  });

  if (loading) return <AlertMessage message="Loading data" />;
  if (error) return <AlertMessage message="Error" />;
  if (data.countries.edges.length === 0)
    return <AlertMessage message="No results" />;

  // console.log();

  let hasNextPage = data.countries.pageInfo.hasNextPage;

  return (
    <MainContainer>
      <CardsContainer>
        {data.countries.edges.map(({ node }: any, index: number) => (
          <Link
            to={`/country/${node.alpha2Code}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <CardItem data={node} />
          </Link>
        ))}
      </CardsContainer>
      {hasNextPage && (
        <ButtonContainer>
          <LoadMore
            onClick={() => {
              const { endCursor } = data.countries.pageInfo;
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult: any, { fetchMoreResult }) => {
                  fetchMoreResult.countries.edges = [
                    ...prevResult.countries.edges,
                    ...fetchMoreResult.countries.edges,
                  ];
                  return fetchMoreResult;
                },
              });
            }}
          >
            Load More
          </LoadMore>
        </ButtonContainer>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 5em;
  margin-bottom: 2em;
`;

const LoadMore = styled.button`
  background: ${({ theme }) => theme.colors.elements};
  border: none;
  outline: none;
  padding: 1em 1.5em;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.colors.shadowInput};
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  width: 200px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 1em;
`;

export default MainContent;
