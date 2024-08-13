/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import styles from './Fixture.module.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import DateTimeComponent from '../DateTimeComponent/DateTimeComponent'
import ScoreComponent from '../ScoreComponent/ScoreComponent'
import ExtraInfoComponent from '../ExtraInfoComponent/ExtraInfoComponent'
import WinnerComponent from '../WinnerComponent/WinnerComponent'

function Fixture({ fase, data }) {

    const [ jogos, setJogos ] = useState([])
    const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/${fase.toLowerCase()}-copa-2023.json`

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch(url)
            const data = await response.json() 
            setJogos(data)
        }
        buscarJogos()
    }, [url])

    let jogosFiltrados = jogos.filter(jogo => jogo.data == data)

    return (
        <section className={styles.jogos}>
            <h2>Jogos do dia {data}</h2>
            {
                (jogosFiltrados.length > 0) ? 
                jogosFiltrados.map(jogo => (
                    <section key={jogo.jogo} className={styles.jogo}>
                        <HeaderComponent jogo={jogo} />
                        <DateTimeComponent jogo={jogo} />
                        <ScoreComponent jogo={jogo} />
                        <ExtraInfoComponent jogo={jogo} />
                        <WinnerComponent jogo={jogo} />
                    </section>
                ))
                : <h4>Sem Jogos no dia {data}</h4>
            }
        </section>
    );

}

export default Fixture