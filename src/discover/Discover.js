import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Heading from '../components/Heading'
import s, { navBar } from '../styles'
import Set from '../components/Set'

class Discover extends Component {
    static navigatorStyle = navBar.dark;
    render() {
        return (
            <ScrollView style={s.page}>
                <Heading title='Trending' />
                <Set card />
                <Heading title='Recently Uploaded' />
                <Heading title='Artists We Love' />
                <Heading title='Genres & Moods' />
                <Heading title='Radio Mixes' />
                <Heading title='Past Events' />
            </ScrollView>
        )
    }
}

export default Discover
