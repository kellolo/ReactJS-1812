import styles from './style.css' 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { List, ListItem } from 'material-ui/List'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 200,
    },
    inline: {
      display: 'inline',
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin: theme.spacing(-2, 2, 2, 0),
      },
  }));
  
  export default function Item(props) {
    const classes = useStyles();

    let avatar = props.Item.image;
    let name = props.Item.senderName;
    let text = props.Item.text;
    let chatLink = "/chat/"+props.Item.id;

    return (
      <Link to = {chatLink}>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} className={classes.large}/>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              </Typography>
              {text}
            </React.Fragment>
          }
        />
      </ListItem>    
      </Link>
    );
  }
