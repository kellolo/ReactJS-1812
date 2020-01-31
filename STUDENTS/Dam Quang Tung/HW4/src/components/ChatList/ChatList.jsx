import './style.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Item from '../ChatListItem/ListItem.jsx'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  let chats = [{image:"http://pngimg.com/uploads/trollface/trollface_PNG15.png",senderName: "1", text: "Hi!", id: 1},
  {image:"http://pngimg.com/uploads/trollface/trollface_PNG15.png", senderName: "2", text: "Hallo man!", id: 2},
  {image:"http://pngimg.com/uploads/trollface/trollface_PNG15.png", senderName: "3", text: "Whats up?", id: 3},
  {image:"http://pngimg.com/uploads/trollface/trollface_PNG15.png", senderName: "4", text: "How are you?", id: 4},
  {image:"http://pngimg.com/uploads/trollface/trollface_PNG15.png", senderName: "5", text: "Hi!", id: 5}];


  let ChatListArr = chats.map (chats => <Item Item={ {
        image: chats.image,
        senderName: chats.senderName,
        text: chats.text,
        id: chats.id
} }/>)


  return (
    <List className={classes.root}>

    {ChatListArr}

    </List>
  );
}