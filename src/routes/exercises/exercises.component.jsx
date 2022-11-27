import SearchBox from "../../components/searchBox/searchBox.component";
import {
  ExercisesContainer,
  FlexContainer,
  SearchBtn,
} from "./exercises.style";
const Exercises = () => {
  return (
    <>
      <ExercisesContainer>
        <FlexContainer>
          <SearchBox />
          <SearchBtn>Search</SearchBtn>
        </FlexContainer>
      </ExercisesContainer>
    </>
  );
};

export default Exercises;
