import React from 'react';
import Page from './page';

class IAppBar extends React.Component {

    onChangeText(text) {

    }

    onChangeSelection(text){

    }

    render() {
        return(
            <Page
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

export default IAppBar;