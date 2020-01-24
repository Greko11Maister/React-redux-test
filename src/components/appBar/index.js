import React from 'react';
import Page from './page';
import { connect } from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';

class IAppBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text : ''
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        this.setState({ text });
        this.props.findSuggestions(text);
    }

    onChangeSelection(text){

    }

    render() {
        const { text } = this.state;
        const { suggestions } = this.props;

        return(
            <Page
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    }
}

/*
//--> Forma larga de definir la acciones.
const mapDispatchToProps = (dispatch) => {
    return  {
        findSuggentions: text => dispatch(findSuggestions(text))
    }
}*/

// Forma corta de definir las acciones

const mapDispatchToProps = {
    findSuggestions
}

export default connect(mapStateToProps, mapDispatchToProps)(IAppBar);