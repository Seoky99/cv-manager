function ResumeTabList({data, isEducation}) {

    const tabItems = data.map( tab => {
        if (isEducation) {
            const {id, school, degree, startDate, endDate, location} = tab;

            return (
                <div className="tab-item" key={id}>
                    <p className="dates">{`${startDate}-${endDate}`}</p>
                    <p className="desc"><strong>{`${school}, ${degree},  ${location}`}</strong></p>
                </div> 
            );
        } else {
            const {id, companyName, positionTitle, startDate, endDate, location, description} = tab;
            return (
                <div className="tab-item" key={id}>
                    <p className="dates">{`${startDate}-${endDate}`}</p>
                    <div className="description">
                        <p><strong>{`Worked at ${companyName} for a ${positionTitle} at ${location}`}</strong></p>
                        <p className="desc">{`I did ${description}.`}</p>
                    </div>
                </div> 
            );
        }
    });

    return (
        <div className="tab-container">
            <h1 className="tab-title">{isEducation ? "Education" : "Work Experience"}</h1>
            {tabItems}
        </div>
    );
}

export default ResumeTabList; 