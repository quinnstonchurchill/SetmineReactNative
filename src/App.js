// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import registerScreens from './screens'
// import { iconsMap, iconsLoaded } from './utils/AppIcons'
import { tabs } from './styles'

const store = configureStore()
registerScreens(store, Provider)

console.disableYellowBox = true /* eslint-disable-line */

// export default class App extends Component {
//     static childContextTypes = {
//         theme: PropTypes.object
//     }
//     constructor(props) {
//         super(props)
//         // iconsLoaded().then(() => {
//         //     this.startApp()
//         // })

//         this.startApp()
//     }
//     getChildContext() {
//         return {
//             theme
//         }
//     }
//     startApp() {
//         Navigation.startTabBasedApp({
//             tabs: [
//                 {
//                     label: 'Discover',
//                     screen: 'Setmine.Discover',
//                     title: 'Discover'
//                 }
//             ],
//             tabsStyle
//         })
//     }
// }

export default function App() {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Discover',
                screen: 'Setmine.Discover',
                title: 'Discover'
            },
            {
                label: 'Home',
                screen: 'Setmine.Home',
                title: 'Home'
            }
        ],
        tabsStyle: tabs
    })
}
