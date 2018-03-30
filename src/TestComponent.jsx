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
            mine: []
        }
    }
    componentWillMount() {
        let mines
        axios.get('http://registry.intermine.org/service/instances').then((response) => {
            mines = response.data.instances.filter((val, index) =>
                (val.status === "Running" ? val : null)
            )
            this.setState({
                "mine": mines
            })
        })
    }
    render() {
        const { classes } = this.props;
        const cardActions = this.state.mine.map((mine) =>
            <CardActions key={mine.id} style={{ "margin": "0px", "padding": "0px" }}>
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