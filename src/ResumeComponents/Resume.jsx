import ResumeHeader from "./ResumeHeader";
import ResumeTab from "./ResumeTab";

function Resume({headerData, educationData, experienceData}) {
    return (
    <div className="left-panel-container">   
        <div className="resume-container">
            <ResumeHeader headerData={headerData}></ResumeHeader>
            <div className="tab-list-container">            
                <ResumeTab data={educationData} isEducation={true}>
                </ResumeTab>
                <ResumeTab data={experienceData} isEducation={false}>
                </ResumeTab>
            </div>
        </div>
    </div> 
    );
}

export default Resume;