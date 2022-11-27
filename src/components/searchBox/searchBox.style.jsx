import styled from "styled-components";

export const SearchContainer = styled.div`
  max-width: 60%;
  min-height: 40px;
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
