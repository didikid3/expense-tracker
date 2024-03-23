import React, { useState } from "react";
import routes from "../../router/routers";

import "./_CustomNav.scss";

const CustomNav = () => {
    const [window, setWindow] = useState(false);

    let openClose = () => {
        setWindow(!window);
    };

    return(
    <nav className="navbar-menu" style={{width: window === false ? 250 : 60}}>
        <div className="burger" onClick={() => openClose()}>
            <img src="img/menu.svg" alt="burger"/>
        </div>
        <ul className="navbar__list">
            {routes.map ((item, i) => (
                <div className="navbar__li-box" key={i}>
                    <img 
                        src={item.icon}
                        alt={item.label}
                        style={{ paddingLeft: window === false ? 27 : 17 }}
                    />
                    <li
                        className="navbar__li"
                        style={{ display: window === false ? "inline-block" : "none" }}
                    >
                        {item.label}
                    </li>
                </div>
            ))}
        </ul>
    </nav>
    );
};

export default CustomNav;