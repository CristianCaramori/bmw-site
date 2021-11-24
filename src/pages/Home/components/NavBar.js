import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import  Paper  from '@material-ui/core/Paper';
import  Button  from '@material-ui/core/Button';
import  ListSubheader  from '@material-ui/core/ListSubheader';
import  ListItem from '@material-ui/core/ListItem';
import  ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles ((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
      width: '100%',  
    }
  
}));

const tags = [
    { id: 1, name: 'Modelo' },
    { id: 2, name: 'Ano' },
]

function NavBar() {
    const classes = useStyles ();
    return (
        <Paper className={classes.root}>
        <Button variant="outlined" color="secondary" className={classes.button}>Categorias</Button>
        <ListSubheader>{`Filtre o produto da forma que quiser`}</ListSubheader>
        {
        tags.map((item) => (
            <ListItem dense button key={`item-${item.id}-${item.name}`}>
                <ListItemText primary={`#${item.name}`} />
            </ListItem>
        ))
        }
        <ListItem button>
            Exibir mais informações
        </ListItem>
        </Paper>
    )
}

export default NavBar;