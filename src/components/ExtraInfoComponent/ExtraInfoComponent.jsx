/* eslint-disable react/prop-types */
import styles from './ExtraInfoComponent.module.css';

function ExtraInfoComponent({ jogo }) {
    return (
        <div>
            {
                jogo.prorrogacao === "Sim" ? (
                    <div className={styles.centralizar}>
                        <span>Prorrogação ? {jogo.prorrogacao} | Placar Prorrogação {jogo.placar_prorrogacao}</span>
                        {
                            jogo.penaltis === "Sim" ?
                            <span>Pênaltis ? {jogo.penaltis} | Placar Pênaltis {jogo.placar_penaltis}</span>   
                            :
                            <span></span>
                        }
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}

export default ExtraInfoComponent;
