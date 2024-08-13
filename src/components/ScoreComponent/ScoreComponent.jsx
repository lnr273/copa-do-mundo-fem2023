/* eslint-disable react/prop-types */
import styles from './ScoreComponent.module.css';

function ScoreComponent({ jogo }) {
    return (
        <h3 className={styles.placar}>
            <div className={styles.mandanteBox}>
                { jogo.mandante }
                <img src={ `/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png` } alt={jogo.mandante} />
            </div>
            <div className={styles.placarBox}>
                <span className={styles.gols}>{ jogo.gols_mandante }</span> 
                x 
                <span className={styles.gols}>{ jogo.gols_visitante }</span>
            </div>
            <div className={styles.visitanteBox}>
                <img src={ `/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png` } alt={jogo.visitante} />
                { jogo.visitante }
                </div>
        </h3>
    );
}

export default ScoreComponent;
