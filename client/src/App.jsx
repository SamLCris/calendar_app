import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigations";
import { TaskEditPage } from "./pages/TaskEditPage";
function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks-edit" element={<TaskEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
