import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/Main page/MainPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
function App() {
  return <RouterProvider router={routerConfig} />;
}

export default App;
