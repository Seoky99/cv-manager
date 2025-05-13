import {useState} from 'react';

function Dropdown({ children, title, handleAdd, data, dataHandler, isEducation, hasAdd=true }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-title">
                    <h1 className="title">{title}</h1>
                    <button onClick={() => setOpen(!open)}>Click me!</button>
                </div>
            
                <div className="dropdown-children">
                    {open && children}
                    {open && hasAdd && <button onClick={() => {handleAdd(data, dataHandler, isEducation)}}>CLICK ME!</button>}
                </div>
            </div>
        </>
    )
}

export default Dropdown; 