import React, { Component } from 'react';

import { Grid } from '@material-ui/core';


class Blog extends Component {
    render() {
        return (
            <Grid container>
                <Grid md={12} lg={12} item>
                    <h2 style={{ textAlign: "center" }}>
                        Under Devvelopment
                    </h2>
                </Grid>
            </Grid>
        )
    }
}

export default Blog;