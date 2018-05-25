

import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import * as Actions from '../action';
import RaisedButton from "material-ui/RaisedButton";


const styles = {
    container: {
        height: 100
    }
}

class CreateNewComment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: 'Init content'
        }
    }

    onChange = (e, value) => {
        this.setState({
            content: value
        })
    }

    onCreate = () => {
        let comment = {
            
        }
        this.props.createNewComment(comment);
    }

    render() {
        return (
            <div style={styles.container}>
            <TextField
            hintText="Write comment here."
            multiLine={true}
            onChange={this.onChange}
            />
            <RaisedButton label="Create" primary={true} onClick={this.onCreate} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        createNewComment: (comment) => {
             dispatch(Actions.addComment(comment))

        }   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNewComment);






