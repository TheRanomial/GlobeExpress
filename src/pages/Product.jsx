import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About GlobeXpress.</h2>
          <p>
           This is a react project made by me (Himanshu Singh) which can be used 
           by an person to track their travel destinations and store that place information
           .You can also add new places which you visited from the map.
          </p>
          <p>
            This app also authenticates the user and you can mark your favourite locations on the world map
          </p>
        </div>
      </section>
    </main>
  );
}
