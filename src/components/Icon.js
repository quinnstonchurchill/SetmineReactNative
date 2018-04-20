import React from 'react'
import PropTypes from 'prop-types'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { colors, iconConfig } from '../styles'

const SetmineIcons = createIconSetFromIcoMoon(iconConfig)

const Icon = ({ name, color, size, ...props }) => (
    <SetmineIcons
        name={name}
        color={colors[color]}
        size={size}
        {...props}
    />
);

Icon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.oneOf(Object.keys(colors))
}

Icon.defaultProps = {
    size: 24,
    color: 'grey'
}

export default Icon
