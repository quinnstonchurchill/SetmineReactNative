import React from 'react'
import PropTypes from 'prop-types'
import ReactNative, { StyleSheet } from 'react-native'
import colors from './colors'

const propTypes = {
    bold: PropTypes.bool,
    color: PropTypes.oneOf(Object.keys(colors))
}

const defaultProps = {
    style: null,
    bold: false,
    color: 'charcoal'
}

const styles = StyleSheet.create({
    xs: {
        fontFamily: 'Avenir Next',
        fontSize: 12
    },
    sm: {
        fontFamily: 'Avenir Next',
        fontSize: 14
    },
    md: {
        fontFamily: 'Avenir Next',
        fontSize: 16
    },
    lg: {
        fontFamily: 'Avenir Next',
        fontSize: 20
    },
    xl: {
        fontFamily: 'Avenir Next',
        fontSize: 24
    },
    xxl: {
        fontFamily: 'Avenir Next',
        fontSize: 30
    }
})

const sizes = Object.keys(styles)

const Text = {}
sizes.forEach((size) => {
    Text[size] = ({ style, ...props }) => {
        const fontFamily = props.bold ? 'AvenirNext-DemiBold' : 'Avenir Next'
        const color = props.color && colors[props.color]
        return <ReactNative.Text style={[styles[size], { fontFamily, color }, style]} {...props} />
    }
    Text[size].propTypes = propTypes
    Text[size].defaultProps = defaultProps
})

export default Text
