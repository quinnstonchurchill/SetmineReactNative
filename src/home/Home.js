import React, { Component } from 'react'
import { StyleSheet, ScrollView} from 'react-native'
import Icon from '../components/Icon'

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <Icon name='music' />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

})

export default Home
