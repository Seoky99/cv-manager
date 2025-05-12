import CustomForm from "./CustomForm";
import { useState } from 'react';


function Tab({tabData, handleChange}) {

    const [ editHidden, setEditHidden ] = useState(false);

    const dataWithoutIDs = {...tabData}; 
    delete dataWithoutIDs.id; 

    return(

        <div className="tab-container">
            <div className="tab-buttons">
                <h1>{tabData.school}</h1>
                <button onClick={() => setEditHidden(!editHidden)}>EDIT</button>
                <button>DELETE</button>
            </div>

            {editHidden && <CustomForm handleChange={(e) => handleChange(e, tabData.id)} formData={dataWithoutIDs}></CustomForm>}
        </div>

    );

}

export default Tab; 