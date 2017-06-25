import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import AuthorizedNavigation from './AuthorizedNavigation';

const RootNavigation = StackNavigator({
    //Unauthorized: { screen: Login },
    Authorized: { screen: AuthorizedNavigation },
}, {
        headerMode: 'none'
    });

export default RootNavigation;

/**
 * navigate (push)
 *   #              #
 *   # Unauthorized #
 *   # Authorized   #
 *   ################
 */

/**
 *  1) RESET
 *   #              #
 *   #              #
 *   #              #
 *   ################
 *
 *  2) NAVIGATE
 *
 *   #              #
 *   #  Authorized  #
 *   #              #
 *   ################
 */
