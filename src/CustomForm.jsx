function CustomForm({title, description, handleChange, headerData}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>

            <label htmlFor="name-input"></label>
            <input id="name-input" name="name" onChange={(e) => handleChange(e)} value={headerData["name"]}></input>

            <label htmlFor="email-input"></label>
            <input id="email-input" name="email" onChange={(e) => handleChange(e)} value={headerData["email"]}></input>

            <label htmlFor="phone-input"></label>
            <input id="phone-input" name="phone" onChange={(e) => handleChange(e)} value={headerData["phone"]}></input>

            <label htmlFor="address-input"></label>
            <input id="address-input" name="address" onChange={(e) => handleChange(e)} value={headerData["address"]}></input>

        </>
    );

}

export default CustomForm; 