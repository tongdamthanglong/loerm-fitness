import {
  FlexContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
} from "./searchBox.style";
const SearchBox = ({
  handleChange,
  handleSearch,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
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
