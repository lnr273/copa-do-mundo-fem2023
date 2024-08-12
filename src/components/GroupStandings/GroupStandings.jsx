import { useState, useEffect } from 'react';
import styles from './GroupStandings.module.css';

function GroupStanding() {

    const [ grupos, setGrupos ] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/classificacao-por-grupos-2023.json')
            const data = await response.json()
            setGrupos(data)
        }
        getData()
    }, [])

    const [ inputGrupo, setInputGrupo ] = useState('')

    return (
        <>
            <div className={styles.category}>
                <select
                    onChange={(e) => setInputGrupo(e.target.value)}
                    value={inputGrupo}
                >
                    <option value="">Sem categoria especificada</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                </select>
            </div>
            
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Seleção</th>
                        <th>Pontos</th>
                        <th>Vitórias</th>
                        <th>Empates</th>
                        <th>Derrotas</th>
                        <th>Gols Pró</th>
                        <th>Gols Contra</th>
                        <th>Saldo de Gols</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inputGrupo ? 
                            grupos.filter(grupo => grupo.grupo === inputGrupo).map(grupo => (
                                <tr key={grupo.selecao}>
                                    <td>{grupo.posicao}</td>
                                    <td className={styles.left}>{grupo.selecao}</td>
                                    <td>{grupo.pontos}</td>
                                    <td>{grupo.vitorias}</td>
                                    <td>{grupo.empates}</td>
                                    <td>{grupo.derrotas}</td>
                                    <td>{grupo.gols_pro}</td>
                                    <td>{grupo.gols_contra}</td>
                                    <td>{grupo.saldo_gols}</td>
                                </tr>
                            ))
                         : 
                            grupos.map(grupo => (
                                <tr key={grupo.selecao}>
                                    <td>{grupo.posicao}</td>
                                    <td className={styles.left}>{grupo.selecao}</td>
                                    <td>{grupo.pontos}</td>
                                    <td>{grupo.vitorias}</td>
                                    <td>{grupo.empates}</td>
                                    <td>{grupo.derrotas}</td>
                                    <td>{grupo.gols_pro}</td>
                                    <td>{grupo.gols_contra}</td>
                                    <td>{grupo.saldo_gols}</td>
                                </tr>
                            ))
                        
                        
                    }
                </tbody>
            </table>
        </>
        
    );
}

export default GroupStanding;
