import React, { Component } from 'react';
import { Text,  View,} from 'react-native';

import RootNavigation from './navigations/RootNavigation';
export default class App extends Component {
    state = {}
    render() {
        return (
            <RootNavigation/>
        );
    }
}