import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SingleProfile from "../Pages/SingleProfile/SingleProfile";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/:id",
            element: <SingleProfile />,
         },
      ],
   },
]);

export default router;
