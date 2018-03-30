import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import withStyles from 'material-ui/styles';
import { ListItem, ListItemIcon } from "material-ui/List";
import Search from 'material-ui-icons/Search'



const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "white"
    }
}

class SearchBar extends Component {
    render() {
        const { classes } = this.props
        return (
            <ListItem>
                <TextField style={{
                    "marginLeft": "15%",
                    "width": "70%",
                    "color": "green",
                    "background": "white"
                }}
                    id="full-width"
                    placeholder="Search for genes, proteins, pathways, ontology terms, authors, etc."
                    value={this.props.value} onChange={this.props.handleChange} />
                <ListItemIcon>
                    <Search />
                </ListItemIcon>
            </ListItem>

        );
    }
}



export default (SearchBar);