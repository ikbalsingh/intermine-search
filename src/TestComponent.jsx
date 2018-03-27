import React from 'react';
import Card from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import { CardHeader, CardActions } from 'material-ui';

const shadow = { value: 1 }

const TestComponent = () => (
    <Card >
        <CardActions  style={{"margin" : "0px", "padding" : "0px"}}>
            <Checkbox id="RatMine" />
            <label htmlFor="RatMine">RatMine</label>
        </CardActions>
        <CardActions style={{"margin" : "0px", "padding" : "0px"}} >
            <Checkbox id="RatMine" />
            <label htmlFor="RatMine">RatMine</label>
        </CardActions>
    </Card>
);

export default TestComponent;