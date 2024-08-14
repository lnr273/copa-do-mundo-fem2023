import { useState, useEffect } from 'react';
import styles from './Card.module.css';

function Card() {

    const [ grupos, setGrupos ] = useState([])

    useEffect(() => {
        const buscarGrupos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/selecoes.json')
            const data = await response.json()
            setGrupos(data)
        }
        buscarGrupos()
    }, [])

    return (
        <section className={styles.cards}>
            {
                grupos.map(grupo => 
                    <section className={styles.card} key={grupo.grupo}>
                        <div className={styles.row} style={{'backgroundColor': grupo.cor}}></div>
                        <h2>GRUPO { grupo.grupo }</h2>
                        <ul>
                            {
                                grupo.selecoes.map(pais => {
                                    return (
                                    <li key={pais.sigla}>
                                        <img src={`/bandeiras/${pais.imagem}.png`} alt={pais.selecao} />
                                        {pais.selecao}
                                    </li>);
                                })
                            }
                        </ul>
                    </section>
                )
            }
        </section>
        
    );
}

export default Card;
