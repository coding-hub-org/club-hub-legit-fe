import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { loginStatus } from "../actions";
import "./Home.css";
import Clubs from "./Clubs";
import Featured from "./Featured";

function Home() {
  //pulling our reducer from anywhere.
  //dummy example. will be changed later.
  //const login = useSelector(state => state.login);
  //const dispatch = useDispatch();

  return (
    <div>
      <div className="feat-clubs-section">
        <h3 id="featured-clubs">Featured Clubs of the week</h3>
        <p id="featured-clubs-text">
          Top clubs based on attendance and reviews last week
        </p>
        <Featured />
      </div>

      <div className="category-section">
        <h3 id="categories">Categories</h3>
        <button id="science">Science</button>
        <button id="cultural">Cultural</button>
        <button id="self-dev">Self-Development</button>
      </div>

      <div className="all-clubs-section">
        <h3 id="all-clubs">All Clubs</h3>

        <div className="club-containers">
          <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs />
          <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs /> <Clubs />
        </div>

      </div>
    </div>
  );
}
export default Home;
