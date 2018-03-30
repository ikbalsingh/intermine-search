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
            mine: [
                "BMAP",
                "BeanMine",
                "BovineMine",
                "CHOmine",
                "ChickpeaMine",
                "CowpeaMine",
                "FlyMine",
                "GrapeMine",
                "HumanMine",
                "HymenopteraMine",
                "IndigoMine",
                "LegumeMine",
                "MaizeMine",
                "MedicMine",
                "MitoMiner",
                "ModMine",
                "MouseMine",
                "PeanutMine",
                "PhytoMine",
                "PlanMine",
                "RatMine",
                "RepetDB",
                "SoyMine",
                "TargetMine",
                "TetraMine",
                "ThaleMine",
                "Wheat3BMine",
                "WormMine",
                "XenMine",
                "YeastMine",
                "ZebrafishMine"
            ]
        }
    }
    componentWillMount() {
        // let mines
        // axios.get('http://registry.intermine.org/service/instances').then((response) => {
        //     mines = response.data.instances.filter((val, index) =>
        //         (val.status === "Running" ? val : null)
        //     )
        //     this.setState({
        //         "mine": mines
        //     })
        // })
    }
    render() {
        const { classes } = this.props;
        const cardActions = this.state.mine.map((mine, index) =>
            <CardActions key={index} style={{ "margin": "0px", "padding": "0px" }}>
                <Checkbox id={mine} classes={{ checked: classes.checked }} />
                <label htmlFor={mine}>{mine}</label>
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