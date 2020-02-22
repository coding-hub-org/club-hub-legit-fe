import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "../actions";

function Home() {
  //pulling our reducer from anywhere.
  //dummy example. will be changed later.
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>hello world. Login status: {login.toString()}</h1>
      <button onClick={() => dispatch(loginStatus())}>login/logout</button>
    </div>
  );
}
export default Home;
