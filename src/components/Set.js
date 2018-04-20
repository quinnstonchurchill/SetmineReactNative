import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import s, { colors, dims } from '../styles'
import Avatar from './Avatar'
import Icon from './Icon'
import Text from './Text'
import nectar from '../images/nectard.png'

export default class Set extends Component {
    static propTypes = {
        artist: PropTypes.string,
        event: PropTypes.string,
        image: PropTypes.string,
        time: PropTypes.string,
    };
    static defaultProps = {
        artist: 'Bassnectar',
        event: 'Electric Forest 2017',
        image: nectar,
        time: '94:13'
    }
    render() {
        return (
            <TouchableHighlight style={styles.base} activeOpacity={0} underlayColor={colors.blue}>
                <View style={s.column}>
                    <View style={[s.cell]}>
                        <Avatar source={this.props.image} size={48} />
                        <View style={styles.info}>
                            <Text.xs color='grey'>{this.props.artist}</Text.xs>
                            <Text.lg>{this.props.event}</Text.lg>
                        </View>
                        <View style={[s.column, s.alignRight]}>
                            <Text.xs>{this.props.time}</Text.xs>
                            <Icon name='dots' />
                        </View>
                    </View>
                    <View style={s.borderBottom} />
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: 'white'
    },
    info: {
        flexDirection: 'column',
        paddingLeft: dims.spacing4x,
        paddingRight: dims.spacing4x,
        flex: 1
    }
})
