import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  route("", "./components/MainLayout.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("service", "./routes/service.tsx"),
    route("menu", "./routes/menu.tsx"),
    route("reservation", "./routes/reservation.tsx"),
    route("testimonial", "./routes/testimonial.tsx"),
    route("contact", "./routes/contact.tsx"),
  ]),
  route("*", "./routes/not-found.tsx"),
] satisfies RouteConfig;
