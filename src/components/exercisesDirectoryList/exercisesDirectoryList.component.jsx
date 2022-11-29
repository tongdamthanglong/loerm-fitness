import {
  ExercisesDirectoryListContainer,
  ExercisesDirectoryListItemContainer,
  ExercisesDirectoryListItem,
  ExercisesDirectoryListItemImageContainer,
  ExercisesDirectoryListItemImage,
  ExercisesDirectoryListItemTagContainer,
  ExercisesDirectoryListItemTag1,
  ExercisesDirectoryListItemTag2,
  ExercisesDirectoryListItemTitle,
} from "./exercisesDirectoryList.style";
const ExercisesDirectoryList = () => {
  return (
    <ExercisesDirectoryListContainer>
      <ExercisesDirectoryListItemContainer>
        <ExercisesDirectoryListItemImageContainer>
          <ExercisesDirectoryListItemImage />
        </ExercisesDirectoryListItemImageContainer>
        <ExercisesDirectoryListItemTagContainer>
          <ExercisesDirectoryListItemTag1>
            Upper Legs
          </ExercisesDirectoryListItemTag1>
          <ExercisesDirectoryListItemTag2>
            Glutes
          </ExercisesDirectoryListItemTag2>
        </ExercisesDirectoryListItemTagContainer>
        <ExercisesDirectoryListItemTitle>
          {`Exercises Directory List`.toUpperCase()}
        </ExercisesDirectoryListItemTitle>
        <ExercisesDirectoryListItem></ExercisesDirectoryListItem>
      </ExercisesDirectoryListItemContainer>
      {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
    </ExercisesDirectoryListContainer>
  );
};

export default ExercisesDirectoryList;
