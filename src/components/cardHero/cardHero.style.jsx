import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 45px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    max-width: 85%;
    margin: 0 auto 45px;
  }
`;
