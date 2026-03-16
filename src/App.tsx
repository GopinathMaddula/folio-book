import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
