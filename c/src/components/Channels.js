import React, {useState, useEffect, useRef, memo} from 'react';
import './Channels.css';
import servers from './servers.db';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ChannelNameContainer from './ChannelNameContainer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

const style = { //will make <Box/> appear in the center of the screen
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Channels = () => {
    let params = useParams();
    let globalVarCategoryName;
    const [open, setOpen] = useState(false);
    const [newChannelName, setNewChannelName] = useState(null);
    const [categoryNameAndId, setCategoryNameAndId] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        if (changeChannelName.current === true || changeChannelName.current === "delete") changeChannelName.current = false;
    }
    const handleCreateChannel = () => {
        const index = servers.findIndex(s => s.id == params.serverId);
        console.log("glob: ", categoryNameAndId);
        servers[index].channels.push({name: newChannelName, category: categoryNameAndId[0], id: uuidv4()});
        console.log("servers after push: ", servers)
        handleClose();
    }
    const handleChangeCategoryName = () => {
        const index = servers.findIndex(s => s.id == params.serverId);
        servers[index].channels.forEach((c, i) => {//mutates
            //if (c.category === categoryNameAndId[0]) servers[index].channels.splice(i, 1) //mutates, at position i, remove 1 elem
            if (c.category === categoryNameAndId[0]) c.category = newChannelName; //here, newChannelName is a new category name
        });
        handleClose();
    }
    const handleChangeName = () => {
        handleOpen();
        changeChannelName.current=true;
    }
    const handleDeleteCategory = () => {
        handleOpen();
        const index = servers.findIndex(s => s.id == params.serverId);
        servers[index].channels.forEach((c, i) => {//mutates
            if (c.category === categoryNameAndId[0]) servers[index].channels.splice(i, 1) //mutates, at position i, remove 1 elem
        });
        handleClose();
    }
    const [ display, setDisplay ] = useState('none')
    let [selectedServer, setSelectedServer] = useState(servers.filter(s => s.id == params.serverId)) //'d be updated whenever a new channel is created
    function handleClick() {
        display == 'none' ? setDisplay('block') : setDisplay('none');
    }
    const arrowRef = useRef(null);
    const dropdownRef = useRef(null);
    const changingDropdownRef = useRef(null);
    const changeChannelName = useRef(false);
    function handleClickOutside(e) {
        if (display ==="block" && arrowRef.current != e.target && !dropdownRef.current.contains(e.target)) setDisplay('none');
        if (changingDropdownRef.current != null && !changingDropdownRef.current.contains(e.target) && !changingDropdownRef.current.parentNode.contains(e.target)) {changingDropdownRef.current.nextElementSibling.style.display = "none"; changingDropdownRef.current = null}
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside); console.log('rendered')
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [display, servers]);
    useEffect(() => {
        setSelectedServer(servers.filter(s => s.id == params.serverId));
        return () => {
            console.log("wrapping up1");
            setSelectedServer(null);
        }
    }, [params]);//wanted to rerender when params change but couldn't find/figure out how to do it w/o useEff
    const channelsListBuilder = () => {
        let categoriesWithDuplicates = selectedServer[0].channels.map(function(item){ return item.category });
        let categoriesSet = new Set(categoriesWithDuplicates); //removes duplicates
        const categories = Array.from(categoriesSet);
        let channelCategories = [];
        for (let i = 0; i < categories.length; i++) {
            let category = {}
            const channels = selectedServer[0].channels.filter(c => c.category === categories[i]);
            category[categories[i]]=channels;
            channelCategories.push(category);
        }
        return channelCategories;
    }

    return (
        <div className='sidebar' style={{maxWidth:"300px"}}>
            <header className='hheader'>
                <div className='comm-name'>
                    <h4 style={{display:"inline-block", margin:"0"}}>Don Pedro Community</h4>
                </div>
                    <div className='comm-name'>
                        <KeyboardArrowDownIcon ref={arrowRef} fontSize='medium' onClick={handleClick} sx={{
                            cursor:"pointer"
                        }}/>
                        <div className='dropdown' ref={dropdownRef} style={{display:display,
                            position:"fixed", //very imppo! overrides "overflow:hidden" prop of parent (i.e. sidebar class)
                            padding:"0 3px",
                            margin: "0 0 0 -50px",
                            backgroundColor:"transparent"}}>
                            <Paper>
                                <MenuList>
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem>My account</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                          </Paper>
                        </div>
                    </div>
            </header>
            <div className="animatedContainer-1NSq4T" style={{opacity: "1", transform: "translateY(0px)"}}>
                <div className="bannerImage-3KhIJ6" style={{transform: "translateY(0px) scale(1)"}}>
                    <img className="bannerImg-2NHyzX" src="https://picsum.photos/240/135" alt="" style={{height:"135", width:"240"}} aria-hidden="true" />
                </div>
            </div>
            <Modal  //Modal comp can be put to ANY place
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Channel Name:
                    </Typography>
                    <TextField fullWidth={true} sx={{display:"block"}}
                        id="outlined-basic" 
                        label="Channel Name" 
                        variant="outlined"
                        onChange={(e) => setNewChannelName(e.target.value)}/>
                    <Button sx={{marginTop:"5px"}} variant="outlined" type="submit"
                        onClick={()=> changeChannelName.current === false ? handleCreateChannel() : handleChangeCategoryName()}>
                            {changeChannelName.current === true ? "Change" : "Create"}</Button>
                </Box>
            </Modal>
            <div>
                <p>Channels</p>
                {channelsListBuilder().map((c,i) => {
                    return (
                        <div key={i}>
                            <h5 style={{display: "flex", alignItems: "center", 
                                justifyContent: "center",
                                cursor:"pointer",
                            }} id={c.id}
                            onClick={(e) => {
                                setCategoryNameAndId([Object.keys(c)[0], c[Object.keys(c)[0]][0].id]);
                                const el = e.currentTarget.nextElementSibling; //e.target isn't suitable
                                if (e.currentTarget.children[1].contains(e.target)) return;//refers to "just_a_container" div
                                el.style.display === "block" ? el.style.display = "none" : el.style.display = "block"
                                e.currentTarget.children[0].classList.toggle("rotation");
                            }}> <KeyboardArrowDownIcon /> {Object.keys(c)[0]} 
                                <div data-purpose="just_a_container">
                                <MoreVertIcon fontSize="small" onClick={e => {
                                    if (changingDropdownRef.current === null){
                                        changingDropdownRef.current = e.currentTarget;
                                        e.currentTarget.nextElementSibling.style.display = "block";
                                    } else { //console.log("shn't see")
                                        changingDropdownRef.current.nextElementSibling.style.display = "none";
                                        changingDropdownRef.current = null;
                                    }
                                }} />
                                <div style={{position:"fixed", display:"none", zIndex:"2"}}> {/*if no zIndex, it wouldn't be clickable (due to overflowing the div with sidebar class)*/}
                                    <Paper>
                                        <MenuList>
                                            <MenuItem onClick={handleOpen}>Create a channel</MenuItem>
                                            <MenuItem onClick={handleChangeName}>Change category name</MenuItem>
                                            <MenuItem style={{color:"red"}}
                                                onClick={() => handleDeleteCategory()}>Delete this category</MenuItem>
                                        </MenuList>
                                    </Paper>
                                </div>
                                </div>
                            </h5>
                            <div style={{display: "block"}}>
                                <ChannelNameContainer channelNames={c[Object.keys(c)[0]]}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Channels;
