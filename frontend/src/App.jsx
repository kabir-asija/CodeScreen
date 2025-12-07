import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import {Toaster} from 'react-hot-toast'

const App = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster toastOptions={{duration:2000}}/>
    </>
  );
};

export default App;
