import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/MainLayout.tsx", [index("./routes/home.tsx")]),
  route("*", "./routes/not-found.tsx"),
] satisfies RouteConfig;
