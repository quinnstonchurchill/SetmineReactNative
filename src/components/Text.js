import React from 'react'
import PropTypes from 'prop-types'
import ReactNative, { StyleSheet } from 'react-native'
import { colors, font } from '../styles'

const propTypes = {
    bold: PropTypes.bool,
    color: PropTypes.oneOf(Object.keys(colors))
}

const defaultProps = {
    style: null,
    bold: false,
    color: 'charcoal'
}

const sizes = Object.keys(font)

const Text = {}
sizes.forEach((size) => {
    Text[size] = ({ style, ...props }) => {
        const fontFamily = props.bold ? 'AvenirNext-DemiBold' : 'Avenir Next'
        const color = props.color && colors[props.color]
        return <ReactNative.Text style={[font[size], { fontFamily, color }, style]} {...props} />
    }
    Text[size].propTypes = propTypes
    Text[size].defaultProps = defaultProps
})

export default Text
