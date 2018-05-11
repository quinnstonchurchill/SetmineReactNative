import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import s, { colors, vars } from '../styles'
import Avatar from './Avatar'
import Icon from './Icon'
import Text from './Text'
import nectar from '../images/nectard.png'
import { formatArtists } from '../utils/formatUtils'

export default class Set extends Component {
    static propTypes = {
        artist: PropTypes.string,
        event: PropTypes.string,
        image: PropTypes.string,
        time: PropTypes.string,
        card: PropTypes.bool,
    };
    static defaultProps = {
        artist: 'Bassnectar',
        event: 'Electric Forest 2017',
        image: nectar,
        time: '94:13',
        card: false
    };
    renderCard() {
        return (
            <TouchableOpacity
                style={[s.card, s.white_bg, s.shadow1, s.column]}
                activeOpacity={vars.activeOpacity}
            >
                <View>
                <Text.lg>{this.props.event}</Text.lg>
                <View style={s.rowNowrap}>
                    <Text.xs color='grey'>{this.props.artist}</Text.xs>
                    <View style={[s.flex1, s.alignRight]}>
                        <Avatar size={88} source={this.props.image} />
                    </View>
                </View>
                </View>
            </TouchableOpacity>
        )
    }
    renderCell() {
        return (
            <TouchableOpacity
                style={s.white_bg}
                activeOpacity={vars.activeOpacity}
            >
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
            </TouchableOpacity>
        )
    }
    render() {
        if (this.props.card) {
            return this.renderCard()
        }

        return this.renderCell()
    }
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'column',
        paddingLeft: vars.spacing4x,
        paddingRight: vars.spacing4x,
        flex: 1
    }
})
