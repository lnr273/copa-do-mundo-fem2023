/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './TournamentBracket.module.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx';
import DateTimeComponent from '../DateTimeComponent/DateTimeComponent.jsx';
import ScoreComponent from '../ScoreComponent/ScoreComponent.jsx';
import ExtraInfoComponent from '../ExtraInfoComponent/ExtraInfoComponent.jsx';
import WinnerComponent from '../WinnerComponent/WinnerComponent.jsx';

function TournamentBracket({ fase }) {

    const [ jogos, setJogos ] = useState([])
    const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/${fase}-copa-2023.json`

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch(url)
            const data = await response.json() 
            setJogos(data)
        }
        buscarJogos()
    }, [url])

    return (
        <section className={styles.jogos}>
            {
                jogos.map(jogo => (
                    <section key={jogo.id} className={styles.jogo}>
                        <HeaderComponent jogo={jogo} />
                        <DateTimeComponent jogo={jogo} />
                        <ScoreComponent jogo={jogo} />
                        <ExtraInfoComponent jogo={jogo} />
                        <WinnerComponent jogo={jogo}/>
                    </section>
                ))
            }
        </section>
    );
}

export default TournamentBracket;
