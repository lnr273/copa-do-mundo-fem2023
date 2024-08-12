import KnockoutStage from '../../components/KnockoutStage/KnockoutStage.jsx';
import styles from './Oitavas.module.css';

function Oitavas() {
    return (
        <>
            <h2>Oitavas de Final</h2>
            <section className={styles.knockoutTable}>
                <KnockoutStage fase={'Oitavas'}/>
            </section>
        </>
    );
}

export default Oitavas;
