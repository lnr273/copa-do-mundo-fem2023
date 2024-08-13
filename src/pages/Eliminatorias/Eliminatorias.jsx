import TournamentBracket from '../../components/TournamentBracket/TournamentBracket.jsx';
import styles from './Eliminatorias.module.css';

function Oitavas() {
    return (
        <>
            <h1>Jogos Eliminátorios</h1>
            
            <h2>Finais</h2>
            <section className={styles.jogos}>
                <TournamentBracket fase={'Finais'}/>
            </section>

            <h2>Semifinais</h2>
            <section className={styles.jogos}>
                <TournamentBracket fase={'Semifinais'}/>
            </section>

            <h2>Quartas de Final</h2>
            <section className={styles.jogos}>
                <TournamentBracket fase={'Quartas'}/>
            </section>

            <h2>Oitavas de Final</h2>
            <section className={styles.jogos}>
                <TournamentBracket fase={'Oitavas'}/>
            </section>
        </>
    );
}

export default Oitavas;
