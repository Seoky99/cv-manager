import Dropdown from './PanelComponents/Dropdown'
import CustomForm from './PanelComponents/CustomForm'
import Resume from './ResumeComponents/Resume'
import Panel from "./PanelComponents/Panel"
import { useState } from "react";
import './styles.css'
import TabList from './PanelComponents/TabList'


function App() {

  const initialHeaderData = {
    name: "Name Here!", 
    email: "Email here!",
    phone: "Phone here!",
    address: "Address here!"
  };

  const initialEducationData = 
     [{
        id: crypto.randomUUID(), 
        school: "Cornell University",
        degree: "Computer Science",
        startDate: "2/3/30",
        endDate: "3/12/49", 
        location: "Ithaca, NY",
    },
      {
        id: crypto.randomUUID(), 
        school: "NY State",
        degree: "Computer Science",
        startDate: "2/3/30",
        endDate: "3/12/49", 
        location: "Ithaca, NY",
    }];

    const initialExperienceData = [
      {
        id: crypto.randomUUID(), 
        companyName: "CompanyName", 
        positionTitle: "PositionTitle",
        startDate: "1/1/1", 
        endDate: "1/1/1", 
        location: "123 Corbin", 
        description: "I did stuff.",
      }
    ];

  const [headerData, setHeaderData] = useState(initialHeaderData);
  const [educationData, setEducationData] = useState(initialEducationData);
  const [experienceData, setExperienceData] = useState(initialExperienceData);
  
  function handleHeaderChange(e) {
      const newState = {...headerData, [e.target.name]: e.target.value};
      setHeaderData(newState);
  }

  function handleTabChange(e, id, data, dataHandler) {
      const newState = data.map((tab) => {
          return tab.id === id ? {...tab, [e.target.name]: e.target.value} : tab;
      });

      dataHandler(newState);
  }

  return (
    <div className="whole-wrapper">
        <Resume headerData={headerData} educationData={educationData} experienceData={experienceData}/>
        <Panel>
          <Dropdown title="Personal Details">
            <CustomForm formData={headerData} handleChange={handleHeaderChange}></CustomForm>
          </Dropdown>
          <Dropdown title="Education">
            <TabList tabData={educationData} handleChange={handleTabChange} dataHandler={setEducationData}/>
          </Dropdown>
          <Dropdown title="Experience">
            <TabList tabData={experienceData} handleChange={handleTabChange} dataHandler={setExperienceData}></TabList>
          </Dropdown>
        </Panel>
    </div>
  )
}

export default App
