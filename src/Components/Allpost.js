import React from "react";
import { Card, CardContent, Typography, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useState, useEffect } from 'react';

const useStyle = makeStyles({
    div: {
        display: 'flex',
        margin: '5px 10px 0px 10px'
    },
    card: {
        width: '23%',
        height: '24vw',
        border: '1px solid black',
        marginTop: '5px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    content: {
        color: 'black',
    },
    button: {
        border: '1px solid black',
        marginTop: '12px',
        backgroundColor: '#e8e8e4',
    }

})


const Allpost = () => {
    const classes = useStyle();
    const [post, setpost] = useState([]);
    const [post1, setpost1] = useState([]);
    const [post2, setpost2] = useState([]);
    const [post3, setpost3] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
                setpost(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then(response => {
                console.log(response);
                setpost1(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
            .then(response => {
                console.log(response);
                setpost2(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/4')
            .then(response => {
                console.log(response);
                setpost3(response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <div className={classes.div}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" >

                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                            <Typography variant='h6' className={classes.content}>Content:</Typography>{post.body}
                        </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" >

                            {post1.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                            <Typography variant='h6' className={classes.content}>Content:</Typography>{post1.body}
                        </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" >

                            {post2.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                            <Typography variant='h6' className={classes.content}>Content:</Typography>{post2.body}
                        </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" >
    
                            {post3.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                            <Typography variant='h6' className={classes.content}>Content:</Typography>{post3.body}
                        </Typography>

                    </CardContent>
                </Card>
            </div>
        </>
    )
}
export default Allpost;