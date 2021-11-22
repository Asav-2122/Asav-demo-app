import React from "react";
import { OutlinedInput, makeStyles, Button, TextareaAutosize, Typography } from '@material-ui/core';
const useStyle = makeStyles({
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '500px',
        height: '22vw',
        border: '2px solid black',
        margin: ' 10px auto'

    },
    input: {
        marginTop: '15px',
        width: '200px',
    },
    textarea: {
        marginTop: '4%',
        width: '200px',
        maxHeight: '150px',
    },
    button: {
        width: '200px',
        marginTop: '4%',
        backgroundColor: 'grey'
    },
    typography: {
        marginLeft: '43%',
        marginTop: '5px'
    }
})
const Addpost = () => {
    const classes = useStyle();
    return (
        <>
            <Typography variant='h4' className={classes.typography}>ADD POST</Typography>
            <div className={classes.div}>
                <OutlinedInput placeholder="Add Title Here" className={classes.input}>

                </OutlinedInput>
                <TextareaAutosize className={classes.textarea} placeholder='Add Content Here...' minRows={9}>

                </TextareaAutosize>
                <Button className={classes.button}>Add Post</Button>
            </div>
        </>
    )
}
export default Addpost;