import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const RegionSearch: React.FC<Props> = ({ value, onChange }) => {
  const handleSearch = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };
  return (
    <RegionContainer>
      <RegionSelect
        name="region"
        value={value}
        onChange={handleSearch}
        style={{ float: "right" }}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">África</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </RegionSelect>
    </RegionContainer>
  );
};

export default RegionSearch;

const RegionContainer = styled.div`
  grid-area: region;
  position: relative;
  width: 100%;
  border-radius: 2px;
`;
const RegionSelect = styled.select`
  /* width: 50%; */
  box-shadow: ${({ theme }) => theme.colors.shadowInput};
  background: ${({ theme }) => theme.colors.elements};
  border: none;
  outline: none;
  margin: 0;
  appearance: none;
  padding: 1em 2em;
  color: ${({ theme }) => theme.colors.text};
`;
