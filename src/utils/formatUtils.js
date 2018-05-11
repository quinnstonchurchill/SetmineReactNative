export function formatArtists(artists) {
    return artists.map((artist, index) => {
        if (index === artists.length - 1) {
            return artist
        }

        return `${artist}, `
    })
}

export function MMSSToMilliseconds(time) {
    return (parseInt(time.split(':')[0])*60 + parseInt(time.split(':')[1]))*1000;
}

function padZero(num, size) {
    let s = String(num);
    while (s.length < size) {
        s = `0${s}`;
    }
    return s;
}

export function formatSeconds(ms) {
    const secs = ms / 1000;
    const minutes = padZero(Math.floor(secs / 60), 2);
    const seconds = padZero(Math.floor(secs % 60), 2);
    return `${minutes}:${seconds}`;
}