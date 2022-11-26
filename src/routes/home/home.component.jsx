import { Outlet } from "react-router-dom";
import CardHero from "../../components/cardHero/cardHero.component";
import Button from "../../components/button/button.component";
import {
  HomeContainer,
  HomeTitle,
  HomeParagraph,
  HomeCardLeft,
  HomeCardRight,
  HomeImageContainer,
  HomeImage,
} from "./home.style";
const Home = () => {
  return (
    <>
      <HomeContainer>
        <CardHero>
          <HomeCardLeft style={{ padding: "1.3rem", paddingRight: 0 }}>
            <HomeTitle>Exercise Info</HomeTitle>
            <HomeParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea at
              sapiente doloremque, dolore aliquid consequatur aliquam velit
              alias ratione, officia dolorum? Autem aliquam nulla reiciendis
              pariatur, ad similique est culpa?
            </HomeParagraph>
            <Button>Get Exercise</Button>
          </HomeCardLeft>
          <HomeImageContainer>
            <HomeImage src="https://quoimangercesoir.fr/wp-content/uploads/2021/11/image-1.jpeg" />
          </HomeImageContainer>
        </CardHero>
        <CardHero>
          <HomeImageContainer>
            <HomeImage src="https://blog.priceplow.com/wp-content/uploads/2014/08/arnold-legacy.jpg" />
          </HomeImageContainer>
          <HomeCardRight style={{ padding: "1.3rem" }}>
            <HomeTitle>Shop Info</HomeTitle>
            <HomeParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea at
              sapiente doloremque, dolore aliquid consequatur aliquam velit
              alias ratione, officia dolorum? Autem aliquam nulla reiciendis
              pariatur, ad similique est culpa?
            </HomeParagraph>
            <Button>Shop Now</Button>
          </HomeCardRight>
        </CardHero>
      </HomeContainer>
      <Outlet />
    </>
  );
};

export default Home;
