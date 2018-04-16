import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import {
    colors,
    Text
} from '../styles'
import RightButton from './RightButton'

export default class Heading extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        small: PropTypes.bool,
        items: PropTypes.number
    };
    static defaultProps = {
        small: false,
        items: 7
    };
    render() {
        const { small, items } = this.props
        return (
            <View style={[styles.base, (small ? styles.small : styles.default)]}>
                {small ? <Text.sm bold>{this.props.title}</Text.sm> : <Text.lg bold>{this.props.title}</Text.lg>}
                {items > 3 && <RightButton>See All</RightButton>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    small: {
        height: 48
    },
    default: {
        height: 72
    }
})
