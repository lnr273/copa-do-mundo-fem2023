/* eslint-disable react/prop-types */
function TabBtn({ tabName, activeTab, handleTabChange }) {
    return (
        <button 
            className={activeTab === tabName ? 'active' : ''}
            onClick={() => handleTabChange(tabName)}
        >
            { tabName }
        </button>
    );
}

export default TabBtn;
