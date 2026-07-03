import Header from "../components/layout/Header";
import Greeting from "../components/home/Greeting";
import ProgressCard from "../components/home/ProgressCard";
import ContinueJourney from "../components/home/ContinueJourney";
import "../styles/continuejourney.css";
import "../styles/home.css";
import "../styles/header.css";
import "../styles/greeting.css";
import "../styles/progresscard.css";

function Home() {
  return (
    <div className="home">

      <Header />

      <Greeting />

      <ProgressCard
    progress={68}
    streak={4}
    milestones={2}
/>
    <ContinueJourney
    title="Build Ascora"
    day={12}
    progress={40}
/>
    </div>
  );
}

export default Home;