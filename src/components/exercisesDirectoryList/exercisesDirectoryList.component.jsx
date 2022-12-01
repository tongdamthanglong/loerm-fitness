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
  ExercisesDirectoryListItemPagination,
} from "./exercisesDirectoryList.style";

const ExercisesDirectoryList = ({ exercises, setExercises, bodyPart }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(exercises.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exercises.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, exercises]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPartList/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <>
      <ExercisesDirectoryListContainer>
        {currentItems.map((exercise) => {
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
      <ExercisesDirectoryListItemPagination
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        // containerClassName="pagination"
        // pageLinkClassName="page-num"
        // previousLinkClassName="page-num"
        // nextLinkClassName="page-num"
        // activeLinkClassName="active-num"
      />
    </>
  );
};

export default ExercisesDirectoryList;
