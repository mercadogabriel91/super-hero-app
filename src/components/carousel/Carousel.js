import React, { useState } from 'react';
//Material UI
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
//Local imports
import SimpleModal from '../modal/Modal';

export default function CarouselSlider(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function Item(props) {
        return (
            <Paper
                style={{ display: 'flex', flexDirection: 'column', height: '60vh', width: '100%', alignItems: 'center', backgroundColor: 'black' }}
            >
                <SimpleModal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={open} onClose={handleClose} />
                <h2 style={{ color: '#5daa9a' }}>{props.item.name}</h2>
                <p style={{ color: '#5daa9a' }}>{props.item.description}</p>
                <img style={{ height: '100%' }} src={'https://i.pinimg.com/736x/32/6b/75/326b756f91abda60c14b4bfa200603b3.jpg'} alt={''} ></img>

                <Button
                    className="CheckButton"
                    style={{ color: '#5daa9a' }}
                    onClick={() => { setOpen(true) }}
                >
                    Show team
                </Button>
            </Paper>
        )
    }

    var teams = [
        {
            name: "This is team 1",
            description: "this is a brief description of the team",
            img: "this is an url for the image"
        },
        {
            name: "This is team 2",
            description: "this is a brief description of the team N 2",
            img: "this is an url for the image on team 2"
        },
        {
            name: "This is team 3",
            description: "this is a brief description of the team N 3",
            img: "this is an url for the image on team 3"
        }
    ]

    return (
        <Carousel >
            {
                teams.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}