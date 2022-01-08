import React, {useState, useRef} from 'react';
import './Servers.css';
import {NavLink} from 'react-router-dom';
import servers from './servers.db';
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Servers = () => {

    const serversList = servers.map(s => (
        {
            name: s.name,
            id: s.id
        }
    ));
    const draggables = useRef(null);
    
    function dragstart_handler(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.id); //get the ID of the target
    }
    function dragover_handler(e) {
        e.preventDefault();
    }
    function dragenter_handler(e) {
        e.preventDefault();
    }
    function drop_handler(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/html");console.log("data: ", data);
        const dragged = document.getElementById(data);
        if (e.currentTarget === draggables.current.lastChild) {
            draggables.current.insertBefore(dragged, e.currentTarget.nextSibling);
            return ;
        }; //console.log("dragged: ", dragged, "\ne.cT: ", e.currentTarget);
        // console.log("i: ",draggables.indexOf(e.taget));
        draggables.current.insertBefore(dragged, e.currentTarget.nextSibling);
    }
    return (
        <div className='servers'>
            <nav>
                <ul style={{margin:"0", padding:"0"}}>
                    <div className="home"></div>
                    <div className="separator-line"></div>
                    <div aria-label="Servers" ref={draggables}>
                        { serversList.map((s, i) => (
                            <div key={i} className="list-item" draggable='true' 
                                onDragStart={e => dragstart_handler(e)} 
                                onDragOver={e => dragover_handler(e)}
                                onDragEnter={e => dragenter_handler(e)}
                                onDrop={e => drop_handler(e)}
                                id={i}>
                                <div className="pill">
                                    <span className="item-2hkk8m" style={{opacity: 1, height: "8px", transform: "none"}}></span>
                                </div>
                                <div className="tooltip">
                                    <NavLink to={`/channels/${s.id}`}
                                            id={i}>{s.name}</NavLink>
                                    <span className="tooltiptext">{s.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{margin:"10px 0"}}>
                        <Divider light={true}/>
                    </div>
                    <div className="add-server">
                        <AddCircleIcon fontSize="large" 
                            style={{fill: "#C0C0C0",
                                cursor:"pointer"}}/>
                    </div>
                    <div className="find-server"></div>
                    <div className="separator-line"></div>
                    <div className="download-apps vestigial"></div>
                </ul>
            </nav>
        </div>
    )
}

export default Servers;
