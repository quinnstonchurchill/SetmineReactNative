import { Dimensions } from 'react-native'

// device dimensions
const { width, height } = Dimensions.get('window')
export const screenWidth = width
export const screenHeight = height

// spacing
const baseRem = 8
function spacing(scale) {
    return baseRem * scale
}

export const spacing1x = spacing(1)
export const spacing2x = spacing(2)
export const spacing3x = spacing(3)
export const spacing4x = spacing(4)
export const spacing5x = spacing(5)
export const spacing6x = spacing(6)

export const paddingX = spacing2x
export const paddingY = spacing1x

export const cardHeight = 140
export const cardWidth = 180

export const activeOpacity = 0.8
export const borderRadius = 3
