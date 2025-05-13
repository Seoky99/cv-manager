import Tab from "./Tab.jsx";

function TabList({tabData, handleChange, handleDelete, dataHandler}) {

    return (
        <>
        {tabData.map(tab => {
            return <Tab key={tab.id} tabData={tab} handleChange={(e, id) => handleChange(e, id, tabData, dataHandler)} 
             handleDelete={(id) => handleDelete(id, tabData, dataHandler)}></Tab>; 
        })}
        </>
    );
}

export default TabList; 