import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./mock";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
