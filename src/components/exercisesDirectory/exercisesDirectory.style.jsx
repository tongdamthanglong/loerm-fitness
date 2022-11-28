import styled from "styled-components";

export const ExercisesDirectoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  align-content: center;
  max-width: 90%;
  margin: 0 auto;
  color: #fff;
  font-size: 1rem;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const ExercisesDirectoryItemContainer = styled.ul`
  text-align: center;
  justify-self: center;
  align-self: center;
  border-radius: 5px;
  background-color: #333;
  width: 90%;
  min-height: 50px;
  margin: 10px 0;
  padding: 30px 0;
  cursor: pointer;
`;

export const ExercisesDirectoryItem = styled.li`
  list-style: none;
`;

// export const ExercisesDirectoryItemIcon = styled.svg``
