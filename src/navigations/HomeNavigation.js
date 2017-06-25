
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import TabChat from './TabChat';
import TabContact from './TabContact';
import TabGroup from './TabGroup';

const HomeNavigation = TabNavigator({
    TabContact: {
        screen: TabContact,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/contact.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    TabChat: {
        screen: TabChat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/chat.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }

    },
    TabGroup: {
        screen: TabGroup,
        navigationOptions: {
            tabBarLabel: 'Group',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../imgs/group.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
});

const styles = {
    icon: {
        width: 32,
        height: 32
    }
}
export default HomeNavigation;