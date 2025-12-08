import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ProblemsPage from "./pages/ProblemsPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isSignedIn, isLoaded } = useUser();
  if(!isLoaded) return null;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default App;
