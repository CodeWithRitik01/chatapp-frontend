import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import React, { memo, useEffect } from 'react'
import { transFormImage } from '../../lib/features';

const UserItem = ({user, handler, handlerIsLoading,isAdded, styling = {}}) => {
    const {name, _id, avatar} = user;
 
    return (
        <ListItem>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={"1rem"}
              width={"100%"}
              {...styling}
            >
                <Avatar src={transFormImage(avatar)}/>
                <Typography
                  variant="body1"
                  sx={{
                    flexGrow: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    overflow:"hidden",
                    textOverflow:"ellipsis",
                    width: "100%"
                  }}
                >
                    {name}
                </Typography>

                <IconButton 
                  size="small"
                  sx={{
                    backgroundColor: isAdded ? "error.main" : "primary.main",
                    color: "white",
                    "&:hover":{
                        backgroundColor:  isAdded ? "error.dark" :"primary.dark", 
                    }
                  }}
                  onClick={()=>handler(_id)} 
                  disabled={handlerIsLoading}
                  >
                    {isAdded ?<RemoveIcon />: <AddIcon />}
                    
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem);