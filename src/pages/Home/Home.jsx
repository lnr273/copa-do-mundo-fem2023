import styles from './Home.module.css';
import Card from "../../components/Card/Card";

function Home() {
    return (
        <>
            <h1>Copa do Mundo Feminina 2023</h1>
            <section className={styles.cards}>
                <Card />
            </section>   
        </> 
    );
}

export default Home;
