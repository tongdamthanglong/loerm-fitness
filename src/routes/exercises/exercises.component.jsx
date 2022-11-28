import { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import SearchBox from "../../components/searchBox/searchBox.component";
import ExercisesDirectory from "../../components/exercisesDirectory/exercisesDirectory.component";
import { ExercisesContainer } from "./exercises.style";
const Exercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
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
  };
  const handleChange = (e) => {
    const newSearch = e.target.value.toLowerCase();
    setSearch(newSearch);
  };
  return (
    <>
      <ExercisesContainer>
        <SearchBox handleChange={handleChange} handleSearch={handleSearch} />
        <ExercisesDirectory data={bodyParts} />
      </ExercisesContainer>
    </>
  );
};

export default Exercises;
