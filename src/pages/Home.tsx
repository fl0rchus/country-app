import React, { useState } from "react";
import styled from "styled-components";
import MainContent from "../components/main/MainContent";
import Filters from "../components/filters/Filters";

const MainGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  return (
    <>
      <Filters
        search={search}
        onSearchChange={setSearch}
        region={region}
        onRegionChange={setRegion}
      />
      <MainGrid>
        <MainContent search={search} region={region} />
      </MainGrid>
    </>
  );
};

export default Home;
