import TrackPlayer, {STATE_PLAYING, STATE_READY} from 'react-native-track-player';
import {SET_PLAY_ERROR} from './player-store';

async function playInEarPiece() {

    await TrackPlayer.playWithEarpiece();
}

export async function pauseFm() {


        await TrackPlayer.pause();


}
export async function stopFm() {


        await TrackPlayer.pause();


}

export async function playFm() {


        await TrackPlayer.play();


}


export  function addPlayBackErrorListener(cb) {
    TrackPlayer.addEventListener('playback-error', (evt) => {
        cb(evt);

    });
}

export async function setPlayerVolume(volume) {

    if(volume < 0 || volume > 100)
        return

    await TrackPlayer.setVolume(0.01 * volume)
}
export function addPlayBackStateListener(cb) {

    TrackPlayer.addEventListener('playback-state', (evt) => {
        cb(evt);


    });

}
export async function initPlayer(url) {

    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_STOP,
        ],
        compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
        ],
    });
    // };
    await TrackPlayer.reset();
    await TrackPlayer.add({
        title: 'Settai FM',
        artist: 'A Deemwar Product',
        artwork: require('../../assets/images/settai-fm-small.png'),
        url: url,
    });
    await TrackPlayer.play()

}
