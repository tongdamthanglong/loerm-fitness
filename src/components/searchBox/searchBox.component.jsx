import { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import {
  FlexContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
} from "./searchBox.style";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exercisesData);
    }
  };
  const handleChange = (e) => {
    const newSearch = e.target.value.toLowerCase();
    setSearch(newSearch);
  };
  return (
    <>
      <SearchContainer>
        <FlexContainer>
          <SearchInput onChange={handleChange} />
          <SearchBtn onClick={handleSearch}>Search</SearchBtn>
        </FlexContainer>
      </SearchContainer>
    </>
  );
};

export default SearchBox;
