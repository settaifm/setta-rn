import TrackPlayer, {
    STATE_BUFFERING,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_READY,
    STATE_STOPPED,
} from 'react-native-track-player';
import {SET_PLAY_ERROR, SET_PLAY_STATE} from './player-store';
import {SET_VOLUME} from './settings-store';

export const STATE_ERROR="ERROR"

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
    return  TrackPlayer.addEventListener('playback-error', (evt) => {
        cb(evt);

    });
}

export async function setPlayerVolume(volume,dispatch) {



    if(volume < 0 || volume > 100)
        return

    await TrackPlayer.setVolume(0.01 * volume)

    const result = await TrackPlayer.getVolume()
    dispatch({type:SET_VOLUME,payload:volume})

}
export function addErrorListener(cb) {

  return  TrackPlayer.addEventListener('playback-error', (evt) => {
        cb(evt)

    });
}
export function addPlayBackStateListener(cb) {

    let listeners=[]

    listeners[0]=  TrackPlayer.addEventListener('remote-stop', () => {

        cb({"state":STATE_STOPPED})
    });

    listeners[1]= TrackPlayer.addEventListener('remote-pause', (evt) => {

        cb({"state":STATE_PAUSED})


    });
    listeners[2]= TrackPlayer.addEventListener('playback-state', (evt) => {
        const playStatuses = [STATE_PLAYING, STATE_PAUSED, STATE_STOPPED, STATE_BUFFERING];
        if (playStatuses.includes(evt["state"])) {
            cb(evt);
        }



    });





    return listeners;
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
            TrackPlayer.CAPABILITY_STOP,
        ],
    });
    // };
    //await TrackPlayer.updateMetadataForTrack()

    //pitchAlgorithm:pitchAlgorithm
    await TrackPlayer.add({
        title: 'Settai FM',
        artist: 'A Deemwar Product',
        artwork: require('../../assets/images/settai-fm-small.png'),
        url: url
    });
    await TrackPlayer.play()

}
