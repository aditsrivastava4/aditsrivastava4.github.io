import React, { Component } from 'react';
import {
    Grid, Typography
} from '@material-ui/core';


class About extends Component {
    render() {
        return (
            <Grid md={12} lg={12} item>
                <Grid container className="about-container">
                    <Grid md={12} lg={12} item style={{ "textAlign": "center" }}>
                        <Typography variant="h4" style={{ "fontFamily": "cursive" }}>
                            About Me
                        </Typography>
                    </Grid>
                    <Grid md={12} lg={12} item>&nbsp;</Grid>
                    <Grid md={12} lg={12} item>&nbsp;</Grid>
                    <Grid md={12} lg={12} item style={{ "textAlign": "center" }}>
                        <p style={{ "fontFamily": "cursive" }}>
                            Hi, I am <a href="/" className="custom-a-tag" style={{ "fontWeight": 600 }}>Adit Srivastava</a>,
                            a Full stack developer, Web Scraping Engineer, Machine Learning Engineer, and lot more to come.<br />
                            Currently working as a Associate Software Engineer in Pune, MH.<br />
                            Just here to share my experience, of how I self taught myself to learn all the skills I have and maybe help you<br />
                            in that process.
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default About;