import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Exercises from "./routes/exercises/exercises.component";
import ExerciseDetails from "./routes/exerciseDetails/exerciseDetails.component";
import Shop from "./routes/shop/shop.component";
import Footer from "./components/footer/footer.component";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/exercises" element={<Exercises />}>
            <Route path="exerciseDetails" element={<ExerciseDetails />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
