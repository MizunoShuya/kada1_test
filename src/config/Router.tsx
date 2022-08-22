import Home from "../pages/Home";
import Detail from "../pages/Detail";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "検索画面",
    isHeaderElement: true,
  },
  {
    path: "/movies/:id",
    exact: false,
    component: <Detail />,
    title: "詳細画面",
    isHeaderElement: false,
  },
];
