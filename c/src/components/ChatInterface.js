import React from "react";
import "./ChatInterface.css";
// import { io } from "socket.io-client"; //to be uncommented
import { useEffect, useRef, useState } from "react";
import { Input, IconButton } from "@mui/material";
import SendSharpIcon from "@mui/icons-material/SendSharp";

const ChatInterface = ({style}) => { //why exactly "style"? because HOC will add a prop called "style". names must match it here
  // let [socket, setSocket] = useState(null); //to be uncommented

  const inputEl = useRef(null);

  // useEffect(() => { //to be uncommented
  //   setSocket(io("http://localhost:5000"));
  //   // console.log("connected?: ", socket);
  // }, []);

  // useEffect(() => {
  //     socket.on("chat message", (msg)=>{
  //         console.log("event from server: ", msg);
  //     })
  // }, [socket]);

  // if (socket != null) { //to be uncommented
  //   socket.on("chat message", (msg) => {
  //     console.log("event from server: ", msg);
  //   });
  // }

  // const handleClick = (e) => { //to be uncommented
  //   e.preventDefault();
  //   if (inputEl.current.value) {
  //     socket.emit("chat message", inputEl.current.value);
  //     inputEl.current.value = "";
  //   }
  // };
  return (
    <div style={style} className="message-field"> {/*why exactly "style"? because HOC will add a prop called "style". names must match it here*/}
      <div className='vestigial'>689</div>
      <div className="chat-div">
        <Input
          ref={inputEl}
          multiline={true}
          margin="dense"
          autoFocus={true}
          fullWidth={true}
        />
        <IconButton
          color="primary"
          size="large"
        >
          <SendSharpIcon fontSize="large" style={{ fill: "red" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatInterface;
