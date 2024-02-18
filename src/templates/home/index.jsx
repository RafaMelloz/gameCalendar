import { Footer } from '../../components/Footer';
import { GamesAll } from '../../components/GamesAll';
import { GamesToday } from '../../components/GamesToday';
import './styles.css';

function Home() {
  return (
    <>
      <div className="container">
        <h1>Game Calendar</h1>
        <GamesToday />
        <GamesAll />
      </div>
      <Footer />
    </>
  );
}

export default Home;
