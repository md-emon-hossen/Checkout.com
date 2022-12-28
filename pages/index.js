import Arrow from "../Componnent/Arrow";
import Container from "../Componnent/Container";
import Offer from "../Componnent/home/Offer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <div className={styles.offerWrp}>
        <h3>Offers</h3>
        <p>Promotions, deals, and special offers for you</p>
        <div className={styles.OfferItemWrp}>
          <Offer />
          <Offer />
        </div>
      </div>
      <Arrow />
    </Container>
  )
}
