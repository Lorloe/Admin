import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListUsers from "./pages/list/ListUsers";
import ListCourses from "./pages/list/ListCourses"
import ListLessons from "./pages/list/ListLessons"
import ListWords from "./pages/list/ListWords"
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { courseInputs, userInputs, lessonInputs, wordInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ListUsers />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Users" />}
              />
            </Route>
            <Route path="courses">
              <Route index element={<ListCourses />} />
              <Route path=":courseId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={courseInputs} title="Add New Courses" />}
              />
            </Route>
            <Route path="lessons">
              <Route index element={<ListLessons />} />
              <Route path=":lessonId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={lessonInputs} title="Add New Lessons" />}
              />
            </Route>
            <Route path="words">
              <Route index element={<ListWords />} />
              <Route path=":wordId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={wordInputs} title="Add New Words" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
