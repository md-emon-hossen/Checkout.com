import Arrow from "../Componnent/Arrow";
import Container from "../Componnent/Container";
import Explore from "../Componnent/home/Explore";
import Offer from "../Componnent/home/Offer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>

      {/* offers */}
      <div className={styles.offerWrp}>
        <h3>Offers</h3>
        <p>Promotions, deals, and special offers for you</p>
        <div className={styles.OfferItemWrp}>
          <Offer />
          <Offer />
          <Offer />
          <Offer />
        </div>
      </div>
      <Arrow />

      {/* explore */}
      <div className={styles.explore}>
        <h3>Explore Bangladesh</h3>
        <p>These popular destinations have a lot to offer</p>
        <div className={styles.ExloreItemWrp}>
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
          <Explore />
        </div>
      </div>
      <Arrow />

    </Container>

  )
}
