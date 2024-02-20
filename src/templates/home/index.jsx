import { Footer } from '../../components/Footer';
import { GamesAll } from '../../components/GamesAll';
import { GamesToday } from '../../components/GamesToday';
import './styles.css';

function Home() {
  return (
    <>
      <div className="container">
       
        <GamesToday />
        <GamesAll />
      </div>
      <Footer />
    </>
  );
}

export default Home;
