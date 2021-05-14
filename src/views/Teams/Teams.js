import React from 'react';
//Material ui
import { makeStyles } from '@material-ui/core/styles';

//Local imports
import CarouselSlider from '../../components/carousel/Carousel';

export default function Teams() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {/* <p>show teams</p> */}
            <CarouselSlider />
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        backgroundColor: 'black',
        display:'flex',
        justifyContent:'center'
        // height: '60vh',
        // justifyContent: 'center',
        // flexDirection: 'row'
    }
})