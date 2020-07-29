

import {SET_INTERNET_STATUS} from "./settings-store";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
async function playInEarPiece(){

    await TrackPlayer.playWithEarpiece()
}
async function togglePlayback(dispatch,playbackState) {

        if (playbackState === TrackPlayer.STATE_PAUSED) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }

}
export async function initPlayer(dispatch,url) {

        await TrackPlayer.reset();
        await TrackPlayer.add({
            url: url
        });
        await TrackPlayer.play();

}
