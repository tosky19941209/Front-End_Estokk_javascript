import Image from "next/image";
import NavBar from "./navbar/navbar";
import Footer from "./footer/footer";
import Dashboard from "./dashboard/dashboard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar/>
      <Dashboard/>
      <Footer/>
    </main>
  );
}
