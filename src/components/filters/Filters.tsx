import React from "react";
import RegionSearch from "./Region/RegionSearch";
import SearchField from "./Search/SearchField";
import styled from "styled-components";

interface Props {
  search: string;
  onSearchChange: (search: string) => void;
  region: string;
  onRegionChange: (region: string) => void;
}

const Filters: React.FC<Props> = ({
  search,
  onSearchChange,
  region,
  onRegionChange,
}) => {
  return (
    <HeaderFilter>
      <SearchField value={search} onChange={onSearchChange} />
      <RegionSearch value={region} onChange={onRegionChange} />
    </HeaderFilter>
  );
};

export default Filters;

const HeaderFilter = styled.header`
  display: grid;
  grid-template: "search . . region";
  width: 100%;
  align-items: center;
  height: 100px;
  padding: 10px 50px;
`;
