import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchData, exerciseOptions } from "../../utils/fetchData";

import SearchBox from "../../components/searchBox/searchBox.component";
import ExercisesDirectory from "../../components/exercisesDirectory/exercisesDirectory.component";
import ExercisesDirectoryList from "../../components/exercisesDirectoryList/exercisesDirectoryList.component";

import { ExercisesContainer } from "./exercises.style";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        setBodyParts([]);
        console.log(error.message);
      }
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    try {
      if (search) {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        // console.log(exercisesData);
        const searchedExercise = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search)
        );
        setSearch("");
        setExercises(searchedExercise);
      }
    } catch (error) {
      setExercises([]);
      console.log(error.message);
    }
  };
  const handleChange = (e) => {
    const newSearch = e.target.value.toLowerCase();
    setSearch(newSearch);
  };
  return (
    <>
      <ExercisesContainer>
        <SearchBox
          handleChange={handleChange}
          handleSearch={handleSearch}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <ExercisesDirectory
          data={bodyParts}
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <ExercisesDirectoryList
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </ExercisesContainer>
      <Outlet />
    </>
  );
};

export default Exercises;
