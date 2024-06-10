import { Avatar,Stack, Typography } from '@mui/material'
import {Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalanderIcon} from '@mui/icons-material'
import React from 'react'
import moment from "moment"
import { transFormImage } from '../../lib/features'

const Profile = ({ user }) => {
  return (
     <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
         <Avatar
           src={transFormImage(user?.avatar?.url )}
           sx={{
            width:200,
            height:200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solic white"
           }}
         />
         
         <ProfileCard heading={"bio"} text={user?.bio} />
         <ProfileCard heading={"username"} text={user?.username} Icon={<UsernameIcon />}/>
         <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />}/>
         <ProfileCard heading={"Joined"} text={moment(user?.createdAt).fromNow()} Icon={<CalanderIcon />}/>


     </Stack>
)
}

const ProfileCard =({text, Icon, heading}) =>(
    <Stack
       direction={"row"}
       alignItems={"center"}
       spacing={"1rem"}
       color={"white"}
       textAlign={"center"}
    >
        {Icon && Icon}
        <Stack>
           <Typography variant='body1'>{text}</Typography>
           <Typography color={"gray"} variant='caption'>
              {heading}
           </Typography>
        </Stack>
    </Stack>
)

export default Profile