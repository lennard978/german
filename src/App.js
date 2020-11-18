import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Cards } from "./components/Cards";
import { CardsMain } from "./components/CardsMain";
import { GrammaryMain } from "./components/GrammaryMain";
import Home from "./components/Home";
import { Lessons } from "./components/Lessons";
import { LessonsMain } from "./components/LessonsMain";
import { PronounceMain } from "./components/PronounceMain";
import { TestMain } from "./components/TestMain";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/german" component={Home} />
        <Route exact path="/lessonsMain" component={LessonsMain} />
        <Route exact path="/lessonsMain/:id" component={Lessons} />
        <Route exact path="/grammaryMain" component={GrammaryMain} />
        <Route exact path="/pronounceMain" component={PronounceMain} />
        <Route exact path="/cardsMain" component={CardsMain} />
        <Route exact path="/cardsMain/:id" component={Cards} />
        <Route exact path="/testMain" component={TestMain} />
      </Switch>
    </>
  );
}

export default App;
