import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';

//store
import { addChanel } from '../../../actions/chanel_actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const useStyles = makeStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 20px'
    },
    field: {
        width: '250px',
        marginBottom: '20px'
    },
    button: {
        width: '100px'
    }
});

function AddChanelDialog(props){
    
    const [name, setName] = useState('');
    const [descr, setDescr] = useState('');

    const classes = useStyles();

    const handleClose = () => {
        props.onClose()
    }
    
    const handleChange = (event) => {
        if (event.target.id === 'chanel-name') {
            setName(event.target.value)
        }
        if (event.target.id === 'chanel-descr') {
            setDescr(event.target.value)
        }
    }
    
    const handleBtnClick = () => {
        if ((name.length > 0) && (descr.length > 0)) {
            props.addChanel(name, descr)
            setName('')
            setDescr('')
        }
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby='title' open={props.open}>
            <DialogTitle id='title'>Новый канал</DialogTitle>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField className={classes.field} id="chanel-name" label="Название" variant="outlined" value={ name } onChange={ handleChange } />
                <TextField className={classes.field} id="chanel-descr" label="Описание" variant="outlined" value={ descr } onChange={ handleChange } />
                <Button className={classes.button} variant="contained" color="primary" onClick={handleBtnClick}>Создать</Button>
            </form>
        </Dialog>
    )
}

AddChanelDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    addChanel: PropTypes.func.isRequired
}

let mapDispatchToProps = dispatch => bindActionCreators ({ addChanel }, dispatch)

export default connect (null ,mapDispatchToProps) (AddChanelDialog)