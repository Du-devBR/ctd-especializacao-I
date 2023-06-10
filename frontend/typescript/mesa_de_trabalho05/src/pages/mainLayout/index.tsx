import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function MainLayout(){
  return (
    <div>
      <Header />
      <section className="w-full py-11 px-12">
        <Outlet />
      </section>
    </div>
  )
}
