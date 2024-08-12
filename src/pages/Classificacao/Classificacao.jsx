import GroupStandings from '../../components/GroupStandings/GroupStandings';
import styles from './Classificacao.module.css';

function Classificacao() {
    return (
        <>
        <h2>Classificação por Grupos</h2>
            <section className={styles.classificacao}>
                <GroupStandings />
            </section>
        </>
    );
}

export default Classificacao;
