import React from 'react'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <AppBar color='inherit'>
        <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography color={"black"} fontWeight={"700"} component={Link} to="/">Yasser's thoughts and stuff</Typography>
            <InputBase sx={{ width: "200px", border: "1px solid black", borderRadius: "30px", px: 2,}} placeholder="search..."/>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar