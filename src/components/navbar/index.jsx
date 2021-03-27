import React, { Component } from 'react';
import {
    Grid, AppBar, Toolbar, Typography, Button
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {
    HashRouter as Router, Switch, Route
} from "react-router-dom";

import '../../css/index.css'
import About from '../about';
import Blog from '../blog';

class NavBar extends Component {
    render() {
        return (
            <Router>
                <Grid md={12} lg={12} item>
                    <AppBar position="static" className="header-style">
                        <Toolbar>
                            <Grid container>
                                <Grid md={9} lg={9} item>
                                    <a className="custom-a-tag" href="/">
                                        <Typography variant="h5" style={{ "fontFamily": "cursive" }}>
                                            <span style={{ "cursor": "pointer" }}>Adit Srivastava</span>
                                        </Typography>
                                    </a>
                                </Grid>
                                <Grid md={1} lg={1} style={{ "textAlign": "center" }} item>
                                    <Button href="/about" color="inherit" style={{ "fontFamily": "cursive" }}>About</Button>
                                </Grid>
                                <Grid md={1} lg={1} style={{ "textAlign": "center" }} item>
                                    <Button target="_blank" href="https://www.linkedin.com/in/adit-srivastava/" color="inherit" style={{ "fontFamily": "cursive" }}>
                                        <LinkedInIcon style={{ "color": "#0077b5" }} />
                                        &nbsp;LinkedIn
                                    </Button>
                                </Grid>
                                <Grid md={1} lg={1} style={{ "textAlign": "center" }} item>
                                    <Button target="_blank" href="https://github.com/aditsrivastava4" color="inherit" style={{ "fontFamily": "cursive" }}>
                                        <GitHubIcon />
                                        &nbsp;Github
                                    </Button>
                                </Grid>

                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Blog />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default NavBar;