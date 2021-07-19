import React from 'react';
import { Container, Paper, Chip } from '@material-ui/core';
import cars from '../cars.json';

const Car = (props) => {
    const id = props.match.params.id
    const car = cars.find(c => c.id == id)
    console.log(props)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{props.car.Name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car