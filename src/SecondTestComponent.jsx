import React from 'react';
import Card from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import { CardHeader, CardActions } from 'material-ui';
import axios from 'axios'
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import PropTypes from 'prop-types';


const styles = {
    checked: {
        color: "#bdd73c"
    }
}


class TestComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mine: [{
                id: 1,
                name: "Publication"
            }, {
                id: 2,
                name: "Protein"
            }, {
                id: 3,
                name: "Gene"
            }, {
                id: 4,
                name: "ProteinDomain"
            }, {
                id: 5,
                name: "UniProtFeature"
            }, {
                id: 6,
                name: "InteractionExp"
            }, {
                id: 7,
                name: "Author"
            }, {
                id: 8,
                name: "MeshTerm"
            }, {
                id: 9,
                name: "GOTerm"
            }]
        }
    }

    render() {
        const { classes } = this.props;
        const cardActions = this.state.mine.map((mine) =>
            <CardActions key={mine.id} style={{ "padding": "0 25px 0 0" }}>
                <Checkbox id={mine.name} classes={{ checked: classes.checked }} />
                <label htmlFor={mine.name}>{mine.name}</label>
            </CardActions>
        );

        return (

            <Card>
                {cardActions}
            </Card >
        );
    }
}

TestComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestComponent);