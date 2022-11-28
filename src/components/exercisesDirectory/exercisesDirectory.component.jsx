import {
  ExercisesDirectoryContainer,
  ExercisesDirectoryItemContainer,
  ExercisesDirectoryItem,
} from "./exercisesDirectory.style";

const ExercisesDirectory = ({ data }) => {
  return (
    <>
      <ExercisesDirectoryContainer>
        {data.map((item) => {
          return (
            <ExercisesDirectoryItemContainer
              key={item.id || item}
              itemId={item.id || item}
            >
              <ExercisesDirectoryItem>
                {item.toUpperCase()}
              </ExercisesDirectoryItem>
            </ExercisesDirectoryItemContainer>
          );
        })}
      </ExercisesDirectoryContainer>
    </>
  );
};

export default ExercisesDirectory;
