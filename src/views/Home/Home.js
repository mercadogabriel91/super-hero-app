import React from 'react';
//Material ui
import { makeStyles } from '@material-ui/core/styles';

//Assets
//Local imports
import SimpleMenu from '../../components/menu/menu';
import Teams from '../Teams/Teams';

export default function Home(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.upperSection}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '20%', marginLeft: '10%', marginTop: '8vh' }}>
                    <SimpleMenu props={props} />
                </div>
            </div>
            <Teams />
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100%',
        backgroundColor: 'black'
    },
    upperSection: {
        display: 'flex',
        flexDirection: 'column',
        height: '33vh',
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .1), rgba(255, 255, 255, 0.1)), url(https://images6.alphacoders.com/902/thumb-1920-902379.jpg);`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '2cm 25%',
        backgroundSize: 'cover',
        borderBottom: '1px solid #5daa9a'
    }
})