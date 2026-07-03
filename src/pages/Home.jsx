import Header from "../components/layout/Header";
import Greeting from "../components/home/Greeting";
import ProgressCard from "../components/home/ProgressCard";

import "../styles/home.css";
import "../styles/header.css";
import "../styles/greeting.css";
import "../styles/progresscard.css";

function Home() {
  return (
    <div className="home">

      <Header />

      <Greeting />

      <ProgressCard />

    </div>
  );
}

export default Home;