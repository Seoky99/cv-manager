function CustomForm({handleChange, formData}) {

    const formInputs = [];

    for (const [key, value] of Object.entries(formData)) {
        formInputs.push(
            <div key={`${key}`}>
                <label htmlFor={`${key}-input`}>
                    {key[0].toUpperCase() + key.slice(1)}
                </label>
                <input id={`${key}-input`} name={`${key}`} onChange={(e) => handleChange(e)} value={value}></input> 
            </div>
        );
    }

    return (
        <div className="form">
            {formInputs}
        </div>
    );
}

export default CustomForm; 