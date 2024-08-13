import styles from './JogosDoDia.module.css'
import Fixture from "../../components/Fixture/Fixture";

function JogosDoDia() {
    return (
        <section className={styles.jogos}>
            <Fixture fase={'quartas'} data={'10/08'}/>
        </section>
    );
}

export default JogosDoDia;
