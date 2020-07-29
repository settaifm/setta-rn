
import {of, ReplaySubject} from "rxjs";

import {SET_INTERNET_STATUS} from "./settings-store";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";

export async function setPlayInSpeaker(shouldPlayInSpeaker) {

    const playThroughEarpiece= !shouldPlayInSpeaker
    await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: playThroughEarpiece
    });


}


export function debounce(func, wait) {
    let timeout;

    return (...args) =>{
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


export function throttle(func, wait) {
    let enabled=true,updatedArgs;


    return (...args) =>{

        updatedArgs=args

        if(!enabled) return

        enabled=false

        const later = () => {
            func(...updatedArgs);
            enabled=true

        };
         setTimeout(later, wait);
    };
};


export async function checkConnection(dispatch) {
 const {isInternetReachable }=   await Network.getNetworkStateAsync();

 dispatch({type:SET_INTERNET_STATUS,payload:isInternetReachable})
}

