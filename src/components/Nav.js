import React, { useEffect } from 'react'
import "./Nav.css"
function Nav() {
    const[show,setShow] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>{
            setShow(window.scrollY > 100);
        });

        return () => {
            window.removeEventListener("scroll");
    };
}, []);
    return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className="nav-logo"
        src="https://upload.wikipedia.org/wikipedia/commons/0/0"
        alt="Netflix"
        >
            
        </img>
        
        <img className="nav-avatar" alt="Bruno"
        src="https://upload.wikipedia.org/wikipedia/commons"
        >

        </img>
    </div>
    
    )
}

export default Nav