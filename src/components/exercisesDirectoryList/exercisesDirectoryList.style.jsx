import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export const ExercisesDirectoryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
  // min-height: 300px;
  margin: 0 auto;
  color: #000;
  font-size: 1rem;
  margin-top: 35px;
  // margin-bottom: 500px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const ExercisesDirectoryListItemContainer = styled(Link)`
  text-align: center;
  justify-self: center;
  align-self: center;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  width: 90%;
  min-width: 200px;
  min-height: 460px;
  margin: 10px 0;
  padding: 20px 8px;
  cursor: pointer;
  text-decoration: none;

  // @media screen and (max-width: 800px) {
  //   min-height: 450px;
  // }
`;

export const ExercisesDirectoryListItem = styled.li`
  list-style: none;
`;

export const ExercisesDirectoryListItemImageContainer = styled.div`
  overflow: hidden;
`;

export const ExercisesDirectoryListItemImage = styled.img`
  max-width: 100%;
`;

export const ExercisesDirectoryListItemTagContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: 0.85rem;
  list-style: none;
  text-transform: capitalize;
  font-weight: bold;
  color: #333;
`;
export const ExercisesDirectoryListItemTag1 = styled.p`
  padding: 10px;
  align-self: center;
  min-width: 70px;
  min-height: 30px;
  background-color: cyan;
  border-radius: 20px;
`;
export const ExercisesDirectoryListItemTag2 = styled.p`
  padding: 10px;
  align-self: center;
  min-width: 70px;
  min-height: 30px;
  background-color: cyan;
  border-radius: 20px;
`;

export const ExercisesDirectoryListItemTitle = styled.p`
  margin-left: 10px;
  text-align: left;
  font-weight: bold;
`;

export const ExercisesDirectoryListItemPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  gap: 10px;
  font-size: 1rem;
  color: #fff;
  margin: 30px auto;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;
