function Resume({headerData}) {

    const {name, email, phone, address} = headerData;

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
                <div className="tab-item">
                    <p>Date-Date</p>
                    <p><strong>Name of Company</strong></p>
                </div>
            </div>
        </div>
        <div className="tab-container">
            <div className="tab-title">
                <div className="tab-item">
                    <p>Date-Date</p>
                    <p><strong>Name of Company</strong></p>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Resume;