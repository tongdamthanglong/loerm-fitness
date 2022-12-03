import styled from "styled-components";

export const ExerciseDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 95%;
`;
export const ExerciseDetailsImage = styled.img`
  max-width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ExerciseDetailsRightContainer = styled.div`
  width: 95%;
`;

export const ExerciseDetailsHeading = styled.h2`
  color: #000;
  font-size: 2rem;
  margin-top: 30px;
`;
export const ExerciseDetailsParagraph = styled.p`
  color: #000;
  font-size: 1rem;
  margin-top: 27px;
`;
export const ExerciseDetailsTagListContainer = styled.div`
  color: #000;
  margin-top: 25px;
  padding-bottom: 25px;
`;
export const ExerciseDetailsTagListItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;
export const ExerciseDetailsTagListItemTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;
export const ExerciseDetailsTagListItemIconContainer = styled.div`
  padding: 10px;
  background-color: yellow;
  border-radius: 50%;
`;
