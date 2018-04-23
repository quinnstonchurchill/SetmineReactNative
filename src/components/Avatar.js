import React from 'react'
import { Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function Avatar({ source, size, style, ...props }) {
    // return <Image source={{ uri: source }} style={[styles.base, style]} {...props} /
    const avatarStyle = {
        height: size,
        width: size,
        borderRadius: size / 2
    }

    return (
        <Image
            source={source}
            style={[avatarStyle, style
            ]}
            {...props}
        />
    )
}

Avatar.propTypes = {
    // source: PropTypes.string.isRequired,
    size: PropTypes.number
}

Avatar.defaultProps = {
    size: 32
}
