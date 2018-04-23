import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Text from './Text'
import Avatar from './Avatar'
import s from '../styles'

export default function Card({ title, subtitle, image, onPress, ...props }) {
    return (
        <View style={[s.card, s.white_bg, s.shadow1, s.column]} {...props}>
            <Text.lg>{props.title}</Text.lg>
            <View style={s.rowNowrap}>
                <Text.xs color='grey'>{props.subtitle}</Text.xs>
                <View style={[s.flex1, s.alignRight]}>
                    <Avatar size={88} source={props.image} />
                </View>
            </View>
        </View>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string,
}

const styles = StyleSheet.create({

})
