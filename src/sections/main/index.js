import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Courses, Course, College } from "../../pages";
export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/courses/:id" component={Course} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/exams/:id">
          <h2>Exams Page</h2>
        </Route>
        <Route exact path="/exams">
          <h2>Exams Page</h2>
        </Route>
        <Route exact path="/scholarship">
          <h2>Scholarship Page</h2>
        </Route>
        <Route exact path="/loan">
          <h2>Loan Page</h2>
        </Route>
        <Route exact to="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}
