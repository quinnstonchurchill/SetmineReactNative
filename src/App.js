import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import registerScreens from './screens'
import { tabs } from './styles'

import discover from './icons/discover.png'
import discoverSelected from './icons/discover-selected.png'
import home from './icons/home.png'
import homeSelected from './icons/home-selected.png'

const store = configureStore()
registerScreens(store, Provider)

console.disableYellowBox = true /* eslint-disable-line */

export default function App() {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Discover',
                screen: 'Setmine.Discover',
                title: 'Discover',
                icon: discover,
                selectedIcon: discoverSelected,
            },
            {
                label: 'Home',
                screen: 'Setmine.Home',
                title: 'Home',
                icon: home,
                selectedIcon: homeSelected,
            }
        ],
        tabsStyle: tabs
    })
}
