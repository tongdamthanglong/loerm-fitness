import {
  ExercisesDirectoryContainer,
  ExercisesDirectoryItemContainer,
  ExercisesDirectoryItem,
} from "./exercisesDirectory.style";

const ExercisesDirectory = ({
  data,
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <>
      <ExercisesDirectoryContainer>
        {data.map((item) => {
          return (
            <ExercisesDirectoryItemContainer
              key={item.id || item}
              itemId={item.id || item}
              onClick={() => setBodyPart(item)}
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
