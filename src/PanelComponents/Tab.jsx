import CustomForm from "./CustomForm";
import { useState } from 'react';


function Tab({tabData, handleChange}) {

    const [ editHidden, setEditHidden ] = useState(false);

    const dataWithoutIDs = {...tabData}; 
    delete dataWithoutIDs.id; 

    return(

        <div className="tab-container">
            <div className="tab-header">
                <h1>{tabData.school || tabData.companyName}</h1>
                <div className="tab-buttons">
                    <button onClick={() => setEditHidden(!editHidden)}>EDIT</button>
                    <button>DELETE</button>
                </div>
            </div>

            {editHidden && <CustomForm handleChange={(e) => handleChange(e, tabData.id)} formData={dataWithoutIDs}></CustomForm>}
        </div>

    );

}

export default Tab; 