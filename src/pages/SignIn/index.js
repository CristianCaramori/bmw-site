import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import  Typography  from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
        //display: 'flex',
        //height: '100vh'
    },

    //left: {
        //background: 'blue',
        //display: 'flex',
       // flexBasis: "58%",
        //flexDirection: 'column',
       // justifyContent: 'center',
        //alignItems: 'center'
    //},

    //right: {
        //background: 'yellow',
        
        //flexBasis: "42%"
    //},

    //form: {
       // display: 'flex',
       // flexDirection: 'column',
       // margin: '64px 32px',
       // alignItems: 'center'
    //}

}));

function SignIn() {
    const classes = useStyles();

    return (

        
        {/*<div className={classes.root}>

            <div className={classes.left}>
                <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
                    <strong>Seja bem Vindo ao BMW-site!</strong>
                </Typography>
                <Typography variant="body2" style={{color: 'rgb(255,255,255, 0.7)', marginTop: 30, FontSize: 15, lineHeight: '30px'}}>
                    Criado para satisfazer sua fome por carros.
                </Typography>
            </div>
                
            <div  className={classes.right}>
                <form className={classes.form}>
                    <h4>Acesso</h4>
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>

    </div>*/}
    )
}

export default SignIn;