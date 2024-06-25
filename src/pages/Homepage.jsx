import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  
  return (
    <main className={styles.homepage}>
      <PageNav/>
      <section>
        <h1>
        Navigate your journey, track your path,
        <br/> with our GlobeXpress app, your ultimate travel companion.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of.<br/> Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to='/login' className='cta'>Start Your Journey</Link>
      </section>
    </main>
  );
}
