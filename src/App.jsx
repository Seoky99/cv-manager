import Dropdown from './Dropdown'
import CustomForm from './CustomForm'
import Resume from './Resume'
import Panel from "./Panel"
import { useState } from "react";
import './styles.css'


function App() {

  const initialHeaderData = {
    name: "Name Here!", 
    email: "Email here!",
    phone: "Phone here!",
    address: "Address here!"
  };

  const [headerData, setHeaderData] = useState(initialHeaderData);
  
  function handleChange(e) {
      const newState = {...headerData, [e.target.name]: e.target.value};
      setHeaderData(newState);
  }

  return (
    <div className="testStyles">

        <Resume headerData={headerData}/>

        <Panel>
          <Dropdown>
            <CustomForm title="Title1" description="Description1" handleChange={handleChange} headerData={headerData}></CustomForm>
          </Dropdown>
          {/*<Dropdown>
            <CustomForm title="Title2" description="Description2" handleChange={setName} testVal={name}></CustomForm>
          </Dropdown> */}
        </Panel>
    </div>
  )
}

export default App
