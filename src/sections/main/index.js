import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  CourseCategories,
  CoursesByCategory,
  CollegesByCourse,
  College,
  Course,
} from "../../pages";
export default function Main() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/categories/:courseTitle/:courseId/colleges"
          component={CollegesByCourse}
        />
        <Route
          exact
          path="/categories/:courseTitle"
          component={CoursesByCategory}
        />
        <Route exact path="/categories" component={CourseCategories} />
        <Route
          exact
          path="/categories/:courseTitle/:courseId/colleges/:collegeId"
          component={College}
        />
        {/* <Route exact path="/courses/:id" component={Course} /> */}
        {/* <Route exact path="/courses" component={Courses} /> */}
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
