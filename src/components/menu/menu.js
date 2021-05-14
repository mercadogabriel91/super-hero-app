import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                style={{ color: '#5daa9a', fontSize: 18, fontWeight: 'bolder' }}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>My teams</MenuItem>
                <MenuItem onClick={handleClose}>Search</MenuItem>
                <MenuItem onClick={() => {
                    localStorage.removeItem('alkemyToken');
                    props.props.history.push('/');
                }}>Logout</MenuItem>
            </Menu>
        </div>
    );
}