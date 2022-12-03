import { ReactComponent as ReactLogo } from "../../assets/react.svg";
import {
  ExerciseDetailsContainer,
  ExerciseDetailsImage,
  ExerciseDetailsRightContainer,
  ExerciseDetailsHeading,
  ExerciseDetailsParagraph,
  ExerciseDetailsTagListContainer,
  ExerciseDetailsTagListItemContainer,
  ExerciseDetailsTagListItemTitle,
  ExerciseDetailsTagListItemIconContainer,
} from "./exerciseDetails.style";
const ExerciseDetails = () => {
  return (
    <>
      <h1>ExerciseDetails</h1>
      <ExerciseDetailsContainer>
        <ExerciseDetailsImage
          src="https://d205bpvrqc9yn1.cloudfront.net/3699.gif"
          alt=""
        />
        <ExerciseDetailsRightContainer>
          <ExerciseDetailsHeading>
            Push Up Touch Shoulder
          </ExerciseDetailsHeading>
          <ExerciseDetailsParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            inventore adipisci a recusandae, doloribus nostrum voluptates quam
            maxime odit dolores.
          </ExerciseDetailsParagraph>
          <ExerciseDetailsTagListContainer>
            <ExerciseDetailsTagListItemContainer>
              <ExerciseDetailsTagListItemIconContainer>
                <ReactLogo />
              </ExerciseDetailsTagListItemIconContainer>
              <ExerciseDetailsTagListItemTitle>
                Chest
              </ExerciseDetailsTagListItemTitle>
            </ExerciseDetailsTagListItemContainer>
            <ExerciseDetailsTagListItemContainer>
              <ExerciseDetailsTagListItemIconContainer>
                <ReactLogo />
              </ExerciseDetailsTagListItemIconContainer>
              <ExerciseDetailsTagListItemTitle>
                Waist
              </ExerciseDetailsTagListItemTitle>
            </ExerciseDetailsTagListItemContainer>
            <ExerciseDetailsTagListItemContainer>
              <ExerciseDetailsTagListItemIconContainer>
                <ReactLogo />
              </ExerciseDetailsTagListItemIconContainer>
              <ExerciseDetailsTagListItemTitle>
                Body Weight
              </ExerciseDetailsTagListItemTitle>
            </ExerciseDetailsTagListItemContainer>
          </ExerciseDetailsTagListContainer>
        </ExerciseDetailsRightContainer>
      </ExerciseDetailsContainer>
    </>
  );
};

export default ExerciseDetails;
