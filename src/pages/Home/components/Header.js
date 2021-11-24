import React from "react";
import { Avatar, Button } from '@material-ui/core';
//import '../style.css';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar'
import  SvgIcon  from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";


const useStyles = makeStyles ({
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection:{
        display: 'flex',
        alignItems: 'center',
    },
    button: {
       marginRight: 10
    },
    bell: {
        marginRight: 10
    }

});

function Header () {
    const classes = useStyles();

    return (
    <AppBar position="fixed" color="inherit">
        <Toolbar>
            <img src="/images/logo.png" alt="logo" className={classes.img}/>
            <div className={classes.grow}></div>
            <div className={classes.userSection}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Saiba Mais
                </Button> 
                <SvgIcon className={classes.bell}>
                    <Bell></Bell> 
                </SvgIcon>
                <Avatar alt="Remy Sharp" src="" />
            </div>
            {/*<div>
                <a href="/">BMW Models - Alteração</a>
            </div>
            <div>
                <Button color='primary' variant='contained'>Saber mais</Button>
                <span>img1</span>
                <span>img2</span>
            </div> */}
        </Toolbar>
    </AppBar>
    )
}

export default Header