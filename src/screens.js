import { Navigation } from 'react-native-navigation'
import Discover from './discover/Discover'
import Home from './home/Home'

export default function registerScreens(store, Provider) {
    Navigation.registerComponent('Setmine.Discover', () => Discover, store, Provider)    
    Navigation.registerComponent('Setmine.Home', () => Home, store, Provider)
    // Navigation.registerComponent('Setmine.Events', () => Events, store, Provider)
    // Navigation.registerComponent('Setmine.Player', () => Player, store, Provider)
}
