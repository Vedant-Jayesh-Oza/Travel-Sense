import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import useStyles from './styles';

const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                Travel Sense
                </Typography>
                <Box display="flex">
                    <Typography variant='h6' className={classes.title}>
                        Explore the world
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search />
                            </div>
                            <InputBase placeholder='search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
