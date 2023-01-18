import Container from "../Componnent/Container";
import Explore from "../Componnent/home/Explore";
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
        </div>
      </div>
      {/* explore */}
      <div className={styles.explore}>
        <h3>Explore Bangladesh</h3>
        <p>These popular destinations have a lot to offer</p>
        <div className={styles.ExloreItemWrp}>
          <Explore />
        </div>
      </div>

    </Container>

  )
}
