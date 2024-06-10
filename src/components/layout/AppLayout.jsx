import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './Header';
import Title from '../shared/Title';
import { Drawer, Grid, Skeleton } from '@mui/material';
import ChatList from '../specific/ChatList';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from '../specific/Profile';
import { useMychatsQuery } from '../../redux/api/api';
import { useDispatch, useSelector } from 'react-redux';
import { miscSelector, setIsDeleteMenu, setIsMobile, setSelectedDeleteChat } from '../../redux/reducer/misc';
import {useErrors, useSocketEvents} from '../../hooks/hook';
import { authSelector } from '../../redux/reducer/auth';
import { getSocket } from '../../socket';
import {  NEW_MESSAGE_ALERT, NEW_REQUEST, ONLINE_USERS, REFETCH_CHATS } from '../../constants/events';
import { chatSelector, incrementNotification, setNewMessagesAlert } from '../../redux/reducer/chat';
import { getOrSaveFromStorage } from '../../lib/features';
import DeleteChatMenu from '../dialogs/DeleteChatMenu';

const AppLayout = () =>WrappedComponent => {
   
    return (props) =>{
        const params = useParams();
        const dispatch = useDispatch();
        const chatId = params.chatId;
        const deleteMenuAnchor = useRef(null);


        const socket = getSocket();
        const navigate = useNavigate( );

        const [ onlineUsers, setOnlineUsers] = useState([]);

        const { isMobile }  = useSelector(miscSelector);
        const { user }  = useSelector(authSelector);
        const { newMessagesAlert } = useSelector(chatSelector);


        const { isLoading, data, isError, error, refetch } = useMychatsQuery("")

        useErrors([{ isError, error }]);

        useEffect(() => {
            getOrSaveFromStorage({key: NEW_MESSAGE_ALERT, value: newMessagesAlert})
        }, [newMessagesAlert])
 
       
        const handleDeleteChat =(e, _id, groupChat)=>{
            dispatch(setIsDeleteMenu(true));
            dispatch(setSelectedDeleteChat({_id, groupChat}));
            deleteMenuAnchor.current = e.currentTarget;
        }

        const handleMobileClose = () => dispatch(setIsMobile(false));

        const newMessageAlertListener = useCallback((data) => {
            if(data.chatId === chatId) return;

            dispatch(setNewMessagesAlert(data));
        }, [chatId]);

        const newRequestListener = useCallback(() => {
            dispatch(incrementNotification());
        }, [dispatch]);

        const refetchListener = useCallback(() => {
            refetch();
            navigate("/");
        }, [refetch, navigate]);

        const onlineUsersListener = useCallback((data) => {
            console.log(data)
             setOnlineUsers(data);
        }, []);

        const eventHandlers = { 
            [NEW_MESSAGE_ALERT]: newMessageAlertListener,
            [NEW_REQUEST]: newRequestListener,
            [REFETCH_CHATS]: refetchListener,
            [ONLINE_USERS]: onlineUsersListener
         };

        useSocketEvents(socket, eventHandlers);

        return (
            <div>
                <Title />
                <Header />

                <DeleteChatMenu dispatch={dispatch} deleteMenuAnchor={deleteMenuAnchor}/>

                {isLoading ? (
                    <Skeleton />
                ): (
                    <Drawer open={isMobile} onClose={handleMobileClose}>
                        <ChatList
                        w='70vw' 
                        chats={data?.chats}
                        chatId={chatId}
                        onlineUsers={onlineUsers}
                        handleDeleteChat={handleDeleteChat}
                        newMessagesAlert={newMessagesAlert}
                        />
                    </Drawer>
                )}

                <Grid container height={"calc(100vh-4rem)"}>
                    <Grid 
                    item 
                    sm={4} 
                    md={3}
                    sx={{
                        display: {xs: "none", sm:"block"}
                    }}
                    height={"100%"}  
                    >
                        {isLoading ? (
                           <Skeleton />
                        ): (
                            <ChatList 
                            chats={data?.chats}
                            chatId={chatId}
                           //  newMessagesAlert={[
                           //    { chatId,
                           //     count:4}
                           //  ]}
                           //  onlineUsers={["1", "2"]}
                           onlineUsers={onlineUsers}
                           handleDeleteChat={handleDeleteChat}
                           newMessagesAlert={newMessagesAlert}
                          
                            />
                       
                        )}
                    </Grid>

                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                    <WrappedComponent {...props} chatId={chatId} user={user}/>

                    </Grid>

                    <Grid 
                    item
                    md={4}
                    lg={3} 
                    height={"100vh"}
                    sx={{
                        display: {xs: "none", sm:"block"},
                        padding: "2rem",
                        bgcolor:"rgba(0, 0 ,0 ,0.85)"
                    }}
                    >
                    <Profile user={user}/> 
                    </Grid>
                </Grid>
            </div>
          )
    }

}

export default AppLayout;