import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ParticlesBackground from "./Component/ParticlesBackground";
const App = () => {
  const [Progress, setProgress] = useState(0);
  const country = "in";
  const apikey = import.meta.env.VITE_NEWS_API;
  return (
    <>
      <LoadingBar color="#27c4f5" height={3} progress={Progress} />
      <Navbar />
      <ParticlesBackground />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Technology"
              country={country}
              category="Technology"
            />
          }
        ></Route>
        <Route
          path="/Business"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Business"
              country={country}
              category="Business"
            />
          }
        ></Route>
        <Route
          path="/Entertainment"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Entertainment"
              country={country}
              category="Entertainment"
            />
          }
        ></Route>
        <Route
          path="/General"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="General"
              country={country}
              category="General"
            />
          }
        ></Route>
        <Route
          path="/Health"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Health"
              country={country}
              category="Health"
            />
          }
        ></Route>
        <Route
          path="/Science"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Science"
              country={country}
              category="Science"
            />
          }
        ></Route>
        <Route
          path="/Sports"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Sports"
              country={country}
              category="Sports"
            />
          }
        ></Route>
        <Route
          path="/Technology"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="Technology"
              country={country}
              category="Technology"
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
