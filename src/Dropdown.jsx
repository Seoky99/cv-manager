import {useState} from 'react';

function Dropdown({ children }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <h1 className="title">Hello!</h1>
            <button onClick={() => setOpen(!open)}>Click me!</button>
            {open && <h2>hello i am openable content</h2>}
            {open && children}
        </>
    )
}

export default Dropdown; 