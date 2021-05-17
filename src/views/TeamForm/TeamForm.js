import React, { useState, useEffect } from 'react';
//Material ui
import { makeStyles } from '@material-ui/core/styles';
import { AccessAlarm, DeleteForever } from '@material-ui/icons';
//Local imports
import LoadingBar from '../../components/LoadingBar/LoadingBar';
//Services 
import getHeroById from '../../services/super-hero-api/GetHeroById';

const TeamFormElem = (props) => {
    const { classes } = props;
    const [list, setList] = useState([])

    useEffect(() => {
        (async function () {
            getHeroById();
        })();
    }, [])

    return (
        <div>
            <div className={classes.teamTitleContainer}>
                {props.alignment === 'good' ? <p className={classes.goodTeamTitle}>Good Team</p> : <p className={classes.badTeamTitle}>Bad Team</p>}
            </div>
            <div className={classes.topTeamImageContainer}>
                <div className={classes.heroImage}>
                    <div className={classes.heroNameContainer}>
                        {props.alignment === 'good' ? <p className={classes.heroName}>Hero name</p> : <p className={classes.badHeroName}>Hero name</p>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20vh', }}>
                        {/* <AccessAlarm style={{ color: 'white', marginRight:10 }} /> */}
                        <div style={{ border: '1px solid red', borderRadius: 50, width: 27, height: 27, padding: 2, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            <DeleteForever style={{ color: 'red' }} />
                        </div>
                    </div>
                </div>
                <div className={classes.heroImage}>
                    <div className={classes.heroNameContainer}>
                        {props.alignment === 'good' ? <p className={classes.heroName}>Hero name</p> : <p className={classes.badHeroName}>Hero name</p>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20vh', }}>
                        {/* <AccessAlarm style={{ color: 'white', marginRight:10 }} /> */}
                        <div style={{ border: '1px solid red', borderRadius: 50, width: 27, height: 27, padding: 2, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            <DeleteForever style={{ color: 'red' }} />
                        </div>
                    </div>
                </div>
                <div className={classes.heroImage}>
                    <div className={classes.heroNameContainer}>
                        {props.alignment === 'good' ? <p className={classes.heroName}>Hero name</p> : <p className={classes.badHeroName}>Hero name</p>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '20vh', }}>
                        {/* <AccessAlarm style={{ color: 'white', marginRight:10 }} /> */}
                        <div style={{ border: '1px solid red', borderRadius: 50, width: 27, height: 27, padding: 2, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            <DeleteForever style={{ color: 'red' }} />
                        </div>
                    </div>
                </div>
            </div>
            <p className={classes.teamStat}>Random stat</p>
            <LoadingBar val={30} />
            <p className={classes.teamStat}>Random stat</p>
            <LoadingBar val={46} />
            <p className={classes.teamStat}>Random stat</p>
            <LoadingBar val={27} />
        </div>
    )
}

export default function TeamForm() {

    const classes = useStyles();
    return (
        <div>
            <TeamFormElem classes={classes} alignment={'good'} />
            <TeamFormElem classes={classes} alignment={'evil'} />
        </div>
    )
}

const useStyles = makeStyles({
    teamTitleContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    goodTeamTitle: {
        padding: 0,
        margin: 5,
        color: '#5daa9a'
    },
    badTeamTitle: {
        color: 'red',
        padding: 0,
        margin: 5,
    },
    topTeamImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        justifyContent: 'space-evenly'
    },
    heroImage: {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .99), rgba(255, 255, 255, 0.1)), url(https://www.superherodb.com/pictures2/portraits/10/100/85.jpg)`,
        height: '30vh',
        width: '25vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'center'
    },
    heroName: {
        fontSize: 12,
        color: '#5daa9a',
        fontWeight: 'bolder',
    },
    badHeroName: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bolder',
    },
    heroNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    teamStat: {
        color: '#5daa9a',
        marginLeft: '5%',
        fontSize: 12,
        marginBottom: 2,
        marginTop: 2
    }
})