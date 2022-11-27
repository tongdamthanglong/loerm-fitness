import styled from "styled-components";

export const SearchContainer = styled.div`
  max-width: 40%;
  min-height: 40px;
  margin: 0 auto;
  flex-basis: 350px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const SearchInput = styled.input.attrs({
  placeholder: "Search Exercises...",
})`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
`;

export const SearchBtn = styled.button`
  font-family: "Montserrat", sans-serif;
  background-color: cyan;
  color: #fff;
  padding: 10px;
  border-radius: 0 7px 7px 0;
  max-width: 30%;
  font-size: 1rem;
  cursor: pointer;
  margin-left: -50px;
  border: none;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
