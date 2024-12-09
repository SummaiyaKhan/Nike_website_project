import Footer from "./Footer/page";
import Login from "./Login/page";
import Services from "./Services/page";
import Navbar from "./Navbar/page";
import Review from "./Review/page";
import About from "./About/page";
import Main1 from "./Main1/page";

export default function Home() {

  return (
    <section className="bg-cover scroll-smooth bg-[url('/image/bg1.png')] bg-center h-[100vh] w-full">
      <Navbar />  

      <Main1 />

      <About />
    
      <Review />

      <Services />

      <Login />

      <Footer />

   
</section>

  );
}
