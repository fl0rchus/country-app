import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchField: React.FC<Props> = ({ value, onChange }) => {
  const handleSearch = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };

  return (
    <SearchContainer>
      <Icon />
      <Input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={handleSearch}
      />
    </SearchContainer>
  );
};

export default SearchField;

const SearchContainer = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  width: 70%;
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 40px;
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.colors.shadowInput};
  width: 100%;
  border-radius: 2px;
`;

const Icon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 18, position: "relative", left: 25 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
};
