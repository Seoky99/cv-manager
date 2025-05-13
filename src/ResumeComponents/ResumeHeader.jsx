function ResumeHeader({headerData: {name, email, phone, address}}) {
    return (
         <div className="resume-header">
                <h1>{name}</h1>
                <div className="contact-information">
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p> 
                </div>
         </div>
    );
}

export default ResumeHeader;