import React from 'react'
import { Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function Avatar({ source, size, style, ...props }) {
    // return <Image source={{ uri: source }} style={[styles.base, style]} />
    return (
        <Image
            source={source}
            style={[styles.base, { height: size, width: size }, style]}
            {...props}
        />
    )
}

Avatar.propTypes = {
    source: PropTypes.string.isRequired,
    size: PropTypes.number
}

Avatar.defaultProps = {
    size: 32
}

const styles = StyleSheet.create({
    base: {
        borderRadius: 25,
        resizeMode: 'contain'
    }
})
