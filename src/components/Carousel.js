import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class Carousel extends Component {
    static propTypes = {
        sets: PropTypes.array
    };
    static defaultProps = {
        sets: []
    };
    render() {
        return (
            <ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

})
