import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AddChanelDialog from '../AddChanelDialog/AddChanelDialog.jsx'


const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    openDialog: false
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState((prevState) => {
      return ({ open: open, openDialog: prevState.openDialog})
    });
  };

  const handleDialogOpen = () => {
    setState((prevState) => {
      return ({ open: prevState.open, openDialog: true })
    })
  }

  const HandleDialogClose = () => {
    setState((prevState) => {
      return ({ open: prevState.open, openDialog: false})
    })
  }

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'Войти'}>
          <ListItemText primary={'Войти'} />
        </ListItem>
        <ListItem button key={'Создать канал'} onClick={handleDialogOpen}>
          <ListItemText primary={'Создать канал'} />
        </ListItem>
        <ListItem button key={'Контакты'}>
          <ListItemText primary={'Контакты'} />
        </ListItem>
        <ListItem button key={'Настройки'}>
          <ListItemText primary={'Настройки'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon></MenuIcon></Button>
      <Drawer open={state.open} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
      <AddChanelDialog open={state.openDialog} onClose={HandleDialogClose} ></AddChanelDialog>
    </div>
  );
}