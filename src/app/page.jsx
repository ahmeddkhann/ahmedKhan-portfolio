
import Hero from "../../components/hero";
import { FloatingNav } from "../../components/ui/FloadtingNavbar";
import Grid from "../../components/Grid";
import RecentProjects from "../../components/RecentProjects";
import { navItems } from "../../data";
import Approach from "../../components/Approach";
import Footer from "../../components/Footer";
export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav 
      navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Approach/>
      <Footer/>
    </div>
   </main>
  );
}
