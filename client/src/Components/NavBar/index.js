import React from 'react'
import {Typography,AppBar} from '@material-ui/core';
import styles from './index.moduel.css'
function index() {
    return (
        <div>
            <AppBar className={styles.headers}> <Typography color="inherit">MAIN MENU</Typography></AppBar>
        </div>
    )
}

export default index
