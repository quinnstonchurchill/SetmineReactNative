import Ionicons from 'react-native-vector-icons/Ionicons'

const replaceSuffixPattern = /--(active|big|small|very-big)/g
const icons = {
    // music: [30],
    // discover: [30],
    // ticket: [30],
    'ios-search': [30]
}

const iconsMap = {}
const iconsLoaded = new Promise((resolve, reject) => {
    Promise.all(
        Object.keys(icons).map(iconName =>
            // IconName--suffix--other-suffix is just the mapping name in iconsMap
            Ionicons.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            ))
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

        // Call resolve (and we are done)
        resolve(true)
    })
})

export {
    iconsMap,
    iconsLoaded
}
