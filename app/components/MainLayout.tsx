import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export const handle = {
    breadcrumb: "home"
}

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="h-[100vh] bg-[#FFFBF2]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
