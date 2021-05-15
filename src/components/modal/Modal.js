import React from 'react';
// import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from "@material-ui/core";

//Local imports 
import TeamForm from '../../views/TeamForm/TeamForm';

export default function SimpleModal(props) {

    const classes = useStyles();

    function getModalStyle() {
        const top = 2;
        const left = 25;

        return {
            top: `${top}%`,
            margin: 'auto',
            width: '90%',
            height: '96%',
            backgroundColor: 'black',
            border: '2px solid red',
            borderRadius: 10
        };
    }
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {<TeamForm />}
            {/* <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p> */}
        </div>
    );

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            {...props}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            {body}
        </Modal>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        //padding: theme.spacing(2, 4, 3),
    },
}));
