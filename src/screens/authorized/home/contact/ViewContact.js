import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class ViewContact extends Component {
    state = {}
    render() {
        return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Text>Component ViewContact</Text>
            </View>
        );
    }
}