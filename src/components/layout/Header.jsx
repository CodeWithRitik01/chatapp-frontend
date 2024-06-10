import { Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuItem, Notifications as NotificationsIcon, Search as SearchIcon } from "@mui/icons-material"
import { AppBar, Backdrop, Badge, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import axios from 'axios'
import React, { Suspense, lazy, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orange } from '../../constants/color'
import { server } from '../../constants/config'
import { userNotExists } from '../../redux/reducer/auth'
import { miscSelector, setIsMobile, setIsNewGroup, setIsNotification, setIsSearch } from '../../redux/reducer/misc'
import { chatSelector, resetNotificationCount } from "../../redux/reducer/chat"

const SearchDialog = lazy(() =>import("../specific/SearchDialog"));
const NewGroupDialog = lazy(() =>import("../specific/NewGroup"));
const NotificationsDialog = lazy(() =>import("../specific/Notifications"));




const Header = () => {


    const {isSearch, isNotification, isNewGroup} = useSelector(miscSelector);
    const {notificationCount} = useSelector(chatSelector);



    const dispatch = useDispatch();


    const navigate = useNavigate();

    const handleMobile =() =>{
       
        dispatch(setIsMobile(true))
    }
 
    const openSearchDialog =()=>{
        dispatch(setIsSearch(true));

    }

    const openNewGroup =()=>{
      dispatch(setIsNewGroup(true))

    }

    const openNotification = ()=>{
      dispatch(setIsNotification(true));
      dispatch(resetNotificationCount());
    }

    const logouthandler = async ()=>{
        try {
            const {data} = await axios.get(`${server}/api/v1/users/logout`, 
            { withCredentials: true, })

            dispatch(userNotExists());
            toast.success(data.message);

        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }

   

    const navigateToGroup =()=> navigate("/groups");

  return (
     <>
       <Box sx={{flexGrow: 1}} height={"4rem"}>
           <AppBar
            position='static'
            sx={{
                bgcolor:orange
            }}
           >
              <Toolbar>
                <Typography 
                variant='h6'
                sx={{
                    display:{xs: "none" ,sm:"block"}
                }}
                >
                   Chatkaro
                </Typography>

                <Box
                    sx={{
                        display:{xs: "block" ,sm:"none"}
                    }}
                >
                    <IconButton color='inherit' onClick={handleMobile}>
                        <MenuItem />
                    </IconButton>
                </Box>

                <Box
                 sx={{
                    flexGrow:1,
                 }}
                >

                </Box>

                <Box>

                    <IconButtons 
                      title={"Search"}
                      icon={<SearchIcon />}
                      onClick={openSearchDialog}
                    />

                    <IconButtons 
                      title={"New Group"}
                      icon={<AddIcon />}
                      onClick={openNewGroup}
                    />
            
                    <IconButtons 
                      title={"Manage Groups"}
                      icon={<GroupIcon />}
                      onClick={navigateToGroup}
                    />       

                    <IconButtons 
                      title={"Notifications"}
                      icon={<NotificationsIcon />}
                      onClick={openNotification}
                      value={notificationCount}
                    />
            

                    <IconButtons
                      title={"Logout"}
                      icon={<LogoutIcon />}
                      onClick={logouthandler}
                    />     

          
                </Box>


              </Toolbar>
           </AppBar>
       </Box>

       {isSearch && (
        <Suspense fallback={<Backdrop open />}>
            <SearchDialog />
        </Suspense>
       )}

        {isNotification && (
        <Suspense fallback={<div>Loading...</div>}>
            <NotificationsDialog/>
        </Suspense>
       )}

       {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>}>
            <NewGroupDialog/>
        </Suspense>
       )}
     </>
  )
}

const IconButtons =({title, icon, onClick, value})=>{
   return(
    <Tooltip title={title}>
        <IconButton color='inherit' size='large' onClick={onClick}>
            {value ? (
            <Badge badgeContent={value} color="error">{icon}</Badge>
            ) :(
                 icon
            )}
        </IconButton>
    </Tooltip>
   )
}

export default Header