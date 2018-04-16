import React from 'react'
import { Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function name({ src, style, ...props }) {
    return <Image source={{ uri: src }} style={[styles.base, style]} />
}

const styles = StyleSheet.create({
    base: {
        borderRadius: 100,
        resizeMode: 'contain'
    }
})
