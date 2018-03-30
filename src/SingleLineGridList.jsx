import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import SimpleCard from "./SimpleCard";
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import { Card } from 'material-ui';
import ContainerCard from "./ContainerCard";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 194,
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

const tileData = [
    {
        img: '/static/images/grid-list/breakfast.jpg',
        title: 'Breakfast',
        author: 'jill111',
        cols: 2,
        featured: true,
    },
    {
        img: '/static/images/grid-list/burgers.jpg',
        title: 'Tasty burger',
        author: 'director90',
    },
    {
        img: '/static/images/grid-list/camera.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: '/static/images/grid-list/morning.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        img: '/static/images/grid-list/hats.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: '/static/images/grid-list/honey.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: '/static/images/grid-list/vegetables.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cols: 2,
    },
    {
        img: '/static/images/grid-list/plant.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img: '/static/images/grid-list/mushroom.jpg',
        title: 'Mushrooms',
        author: 'PublicDomainPictures',
    },
    {
        img: '/static/images/grid-list/olive.jpg',
        title: 'Olive oil',
        author: 'congerdesign',
    },
    {
        img: '/static/images/grid-list/star.jpg',
        title: 'Sea star',
        cols: 2,
        author: '821292',
    },
    {
        img: '/static/images/grid-list/bike.jpg',
        title: 'Bike',
        author: 'danfador',
    },
];


class SingleLineGridList extends React.Component {
    state = { expanded: false };
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <ContainerCard />
            </div>
        );
    }
}



SingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);