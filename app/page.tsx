import About from "@/components/About";
import Contact from "@/components/Contact";
import Logos from "@/components/Logos";
import Main from "@/components/Main";
import Production from "@/components/Production";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Main />
      <Products />
      <About />
      <Logos />
      <Production />
      <Testimonials />
      <Contact /> 
    </>
  );
}
