import React from 'react'
import PropTypes from 'prop-types'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { colors, iconConfig } from '../styles'

const SetmineIcons = createIconSetFromIcoMoon(iconConfig)

export default function Icon(props) {
    const { color, size, ...other } = props
    return (
        <SetmineIcons
            color={colors[color]}
            size={size}
            {...other}
        />
    )
}

Icon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.oneOf(Object.keys(colors))
}

Icon.defaultProps = {
    size: 24,
    color: 'grey'
}
