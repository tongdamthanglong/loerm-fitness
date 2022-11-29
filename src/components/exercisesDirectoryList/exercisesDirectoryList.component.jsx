import { useState, useEffect } from "react";

import { fetchData, exerciseOptions } from "../../utils/fetchData";

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
const ExercisesDirectoryList = ({ exercises, setExercises, bodyPart }) => {
  return (
    <>
      <ExercisesDirectoryListContainer>
        {exercises.map((exercise) => {
          return (
            <ExercisesDirectoryListItemContainer
              key={exercise.id}
              to={`/exercise/${exercise.id}`}
            >
              <ExercisesDirectoryListItemImageContainer>
                <ExercisesDirectoryListItemImage
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  loading="lazy"
                />
              </ExercisesDirectoryListItemImageContainer>
              <ExercisesDirectoryListItemTagContainer>
                <ExercisesDirectoryListItemTag1>
                  {exercise.bodyPart}
                </ExercisesDirectoryListItemTag1>
                <ExercisesDirectoryListItemTag2>
                  {exercise.target}
                </ExercisesDirectoryListItemTag2>
              </ExercisesDirectoryListItemTagContainer>
              <ExercisesDirectoryListItemTitle>
                {`${exercise.name}`.toUpperCase()}
              </ExercisesDirectoryListItemTitle>
              <ExercisesDirectoryListItem></ExercisesDirectoryListItem>
            </ExercisesDirectoryListItemContainer>
          );
        })}
      </ExercisesDirectoryListContainer>
    </>
  );
};

export default ExercisesDirectoryList;
