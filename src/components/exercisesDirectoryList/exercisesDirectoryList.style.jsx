import styled from "styled-components";

export const ExercisesDirectoryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
  min-height: 500px;

  margin: 0 auto;
  color: #000;
  font-size: 1rem;
  margin-top: 35px;
  margin-bottom: 35px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const ExercisesDirectoryListItemContainer = styled.ul`
  text-align: center;
  justify-self: center;
  align-self: center;
  border-radius: 5px;
  background-color: #fff;
  width: 90%;
  min-width: 200px;
  margin: 10px 0;
  padding: 20px 8px;
  cursor: pointer;
`;

export const ExercisesDirectoryListItem = styled.li`
  list-style: none;
`;

export const ExercisesDirectoryListItemImageContainer = styled.div`
  overflow: hidden;
`;

export const ExercisesDirectoryListItemImage = styled.img.attrs({
  src: "https://cdn.dribbble.com/users/5501300/screenshots/15456745/media/ebfa85d44e6577c89166446d06840c28.gif",
})`
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
