import React from 'react'
import PropTypes from 'prop-types'
import ReactNative from 'react-native'
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
    Text[size] = ({ style, bold, color, ...props }) => {
        const fontFamily = bold ? 'AvenirNext-DemiBold' : 'Avenir Next'
        return (
            <ReactNative.Text
                style={
                    [font[size],
                    { fontFamily, color: colors[color] },
                    style
                ]}
                {...props}
            />
        )
    }

    Text[size].propTypes = propTypes
    Text[size].defaultProps = defaultProps
})

export default Text
