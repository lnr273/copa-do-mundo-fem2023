import { useState } from 'react';
import TournamentBracket from '../../components/TournamentBracket/TournamentBracket.jsx';
import './Eliminatorias.css';
import TabBtn from '../../components/TabBtn/TabBtn.jsx';
import Card from '../../components/Card/Card.jsx';

function Eliminatorias() {

    const [ activeTab, setActiveTab ] = useState('Finais')

    function handleTabChange(tabName) {
        setActiveTab(tabName)
    }

    function renderTabContent() {
        switch(activeTab) {
            case 'Finais':
                return <TournamentBracket fase={'finais'} />
            case 'Semifinais':
                return <TournamentBracket fase={'semifinais'} />
            case 'Quartas':
                return <TournamentBracket fase={'quartas'} />
            case 'Oitavas':
                return <TournamentBracket fase={'oitavas'} />
            case 'Grupos': 
                return <Card />
            default:
                null
        }
    }

    return (
        <>
            <h1>Jogos Eliminátorios</h1>
            
            <section className='jogos'>
                <div className='tabs'>
                    <TabBtn tabName={'Finais'} activeTab={activeTab} handleTabChange={handleTabChange} />
                    <TabBtn tabName={'Semifinais'} activeTab={activeTab} handleTabChange={handleTabChange} />
                    <TabBtn tabName={'Quartas'} activeTab={activeTab} handleTabChange={handleTabChange} />
                    <TabBtn tabName={'Oitavas'} activeTab={activeTab} handleTabChange={handleTabChange} />
                    <TabBtn tabName={'Grupos'} activeTab={activeTab} handleTabChange={handleTabChange} />
                </div>
                <div className='tabContent'>
                    {
                        renderTabContent()
                    }
                </div>
            </section>
        </>
    );
}

export default Eliminatorias;
