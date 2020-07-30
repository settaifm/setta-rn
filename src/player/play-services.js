

import {SET_INTERNET_STATUS} from "../core/settings-store";
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
    //
    // var track = {
    //     id: 'unique track id', // Must be a string, required
    //
    //     url: 'http://example.com/avaritia.mp3', // Load media from the network
    //     url: require('./avaritia.ogg'), // Load media from the app bundle
    //     url: 'file:///storage/sdcard0/Music/avaritia.wav' // Load media from the file system
    //
    //     title: 'Avaritia',
    //     title: 'Avaritia',
    //     artist: 'deadmau5',
    //     album: 'while(1<2)',
    //     genre: 'Progressive House, Electro House',
    //     date: '2014-05-20T07:00:00+00:00', // RFC 3339
    //
    //     artwork: 'http://example.com/avaritia.png', // Load artwork from the network
    //     artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
    //     artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
    // };
        await TrackPlayer.reset();
        await TrackPlayer.add({
            title: 'Settai FM',
            artist: 'A Deemwar Product',
            artwork: require('../../assets/images/settai-fm-small.png'),
            url: url
        });



        await TrackPlayer.play();

}
