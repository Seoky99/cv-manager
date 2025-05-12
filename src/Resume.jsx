function Resume({headerData, educationData, experienceData}) {

    const {name, email, phone, address} = headerData;

    const tabItems = educationData.map( tab => {
        const {id, school, degree, startDate, endDate, location} = tab;

        return (
            <div className="tab-item" key={id}>
                <p>{`${startDate}-${endDate}`}</p>
                <p><strong>{`Studied at ${school} for a ${degree} at ${location}`}</strong></p>
            </div> 
        );
    })

    const newTabItems = experienceData.map( tab => {
        const {id, companyName, positionTitle, startDate, endDate, location, description} = tab;
        return (
            <div className="tab-item" key={id}>
                <p>{`${startDate}-${endDate}`}</p>
                <p><strong>{`Worked at ${companyName} for a ${positionTitle} at ${location}`}</strong></p>
                <p>{`I did ${description}.`}</p>
            </div> 
        );
    })

    return (
    <div className="resume-container">   
        <div className="resume-header">
            <h1>{name}</h1>
            <div className="contact-information">
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p> 
            </div>
        </div>
        <div className="tab-container">
            <div className="tab-title">
                {tabItems}
            </div>
        </div>
        <div className="tab-container">
            <div className="tab-title">
                {newTabItems}
            </div>
        </div>
    </div> 
    );
}

export default Resume;