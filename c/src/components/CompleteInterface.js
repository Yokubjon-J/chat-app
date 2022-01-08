import React from 'react';
import Servers from './Servers';
import Channels from './Channels';
import ChatInterface from './ChatInterface';
import Users from './Users';
import './CompleteInterface.css';
import Media from 'react-media';

const CompleteInterface = () => {

    const classes = {
        chatWrapper: {
            width: 'calc(100vw - 239px - 239px - 71px )',
            boxSizing: "border-box",
            position: "relative",
        },
        chatWrapperSmall: {
            width: 'calc(100vw - 71px)',
            boxSizing: "border-box",
            position: "relative",
        },
        chatWrapperExtraSmall: {
            width: "100vw",
            boxSizing: "border-box",
            position: "relative",
        },
    }
    
    const withClassName = (Component, className) => props => (
        <Component {...props} style={className} />
    )

    const bigChatUI = withClassName(ChatInterface, classes.chatWrapper);

    return (
        <Media queries = {{
            big: "(min-width:1200px)", //it means [1200; +inf)
            small: "(min-width: 772px) and (max-width: 1199px)",
            extraSmall: "(max-width: 771px)",
        }}>
            {media => (
                <>
                {media.big && (<div className='complete-interface'>
                    <Servers/>
                    <Channels/>
                    {bigChatUI()}
                    {/* <bigChatUI/> */}
                    <Users/>
                </div>)}
                {media.small && (<div className='complete-small-interface'>
                    <Servers/>
                    {withClassName(ChatInterface, classes.chatWrapperSmall)()}
                </div>)}
                {media.extraSmall && (<div className='complete-small-interface'> 
                    {withClassName(ChatInterface, classes.chatWrapperExtraSmall)()}
                </div>)}
                </>
                )
            }
        </Media>
    )
}

export default CompleteInterface;
