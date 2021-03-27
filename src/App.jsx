import React, { Component } from 'react';



import NavBar from './components/navbar'
import { Grid } from '@material-ui/core';


class App extends Component {
    render() {
        return (
            <Grid container>
                <NavBar />
            </Grid>
        )
    }
}

export default App;