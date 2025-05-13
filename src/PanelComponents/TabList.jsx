import Tab from "./Tab.jsx";

function TabList({tabData, handleChange, dataHandler}) {

    return (
        <>
        {tabData.map(tab => {
            return <Tab key={tab.id} tabData={tab} handleChange={(e, id) => handleChange(e, id, tabData, dataHandler)}></Tab>; 
        })}
        </>
    );
}

export default TabList; 