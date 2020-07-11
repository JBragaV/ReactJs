import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/header';

const meuEstilo = makeStyles({
    titulo:{
        textAlign: 'center',
        color: 'blue'
    }
})

const SobrePage = () => {
    const classes = meuEstilo();
    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography className={classes.titulo} variant='h2' component='h6'>
                    Dadada e EU
                </Typography>
                <Typography paragraph={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem aliquam distinctio a, sit repudiandae officiis praesentium ex magni quasi. Ducimus eius odio impedit eveniet dolor repellat? Laudantium, dolore obcaecati. Esse é da tipografia do MAterial UI. 
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quis tempore at amet labore delectus, quos aliquam cumque nam. Atque, amet. Ipsam illo cum labore aliquam alias. Nesciunt, ipsam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quis tempore at amet labore delectus, quos aliquam cumque nam. Atque, amet. Ipsam illo cum labore aliquam alias. Nesciunt, ipsam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem quis tempore at amet labore delectus, quos aliquam cumque nam. Atque, amet. Ipsam illo cum labore aliquam alias. Nesciunt, ipsam!</p>
            </Container>
        </>
    )
}

export default SobrePage;