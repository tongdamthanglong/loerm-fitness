import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <div>Exercise Info</div>
        <div>Exercise Image</div>
      </div>
      <div>
        <div>Shop Info</div>
        <div>Shop Image</div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
