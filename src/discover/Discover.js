import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Heading from '../components/Heading'
import s, { navBar } from '../styles'

class Discover extends Component {
    static navigatorStyle = navBar.dark;
    render() {
        return (
            <ScrollView style={s.page}>
                <Heading title='Trending' />
            </ScrollView>
        )
    }
}

export default Discover
