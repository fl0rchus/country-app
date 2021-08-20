import { gql } from "@apollo/client";

export const CountriesQuery = gql`
  query GetCountries($query: String, $region: String, $alpha2Code: String, $after: String){
    countries(
      name_Icontains: $query
      region: $region
      alpha2Code: $alpha2Code
      after: $after
      first: 10
    ) {
      edges {
        node {
          name
          nativeName
          topLevelDomain
          flag
          population
          region
          subregion
          capital
          borders
          alpha2Code
          languages {
            edges {
              node {
                name
              }
            }
          }
          currencies {
            edges {
              node {
                name
              }
            }
          }
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }
  }
`;
