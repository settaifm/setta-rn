import {createReducer} from "../config/create-reducer";


export const SET_INITIALIZED = "settings/set_initialized";
export const TOGGLE_AUDIO_OUTPUT = "settings/toggle_audio_output";
export const SET_URL = "settings/seturl";
export const SET_PLAYING = "settings/setPlaying";
export const SET_NOT_PLAYING = "settings/setNotPlaying";
export const SET_STOPPED = "settings/setStopped";
export const SET_VOLUME = "settings/setVolume";
export const SET_INTERNET_STATUS = "settings/setInternetAvailable";
export const SHOW_PLAYER_SETTINGS = "settings/showOptions";
export const HIDE_PLAYER_SETTINGS = "settings/hideOptions";


const FM_URL ="http://stream.zeno.fm/b0qy1rp884zuv";

export const Pitches=[]
const initialState = {


    initialized:false,
    url:FM_URL,
    output_speaker:true,
    isPlaying:true,
    isStopped: false,
    isInternetReachable:true,
    volume:100,
    showSettings:false,
    pitchIndex:0


};

const setInternetReachable =(state,action)=>{

    return { ...state, isInternetReachable:action.payload}

};


const setInitialized =(state,action)=>{

    return { ...state, initialized:true}

};
const setStopped =(state,action)=>{

    return { ...state, isStopped:true,isPlaying:false}

};
const setVolume =(state,action)=>{

    return { ...state, volume:action.payload}

};





const setAudioUrl =(state,action)=>{


    return { ...state, url:action.payload }


};
const setPlaying =(state,action)=>{


    return { ...state, isPlaying:true,isStopped: false }


};
const setNotPlaying =(state,action)=>{

    return { ...state, isPlaying:false }


};



const showSettingsPage =(state,action)=>{


    return { ...state, showSettings:true }


};
const hideSettingsPage =(state,action)=>{

    return { ...state, showSettings:false }


};

const toggleAudio =(state,action)=>{

    const modifiedState = !state.output_speaker;

    return { ...state,   output_speaker:modifiedState}

};






const settingsReducer = createReducer(initialState, {
    [SET_INITIALIZED]: setInitialized,
    [SET_INTERNET_STATUS]: setInternetReachable,
    [SET_URL]: setAudioUrl,
    [SET_PLAYING]: setPlaying,
    [SET_NOT_PLAYING]: setNotPlaying,
    [SET_VOLUME]: setVolume,
    [SHOW_PLAYER_SETTINGS]: showSettingsPage,
    [HIDE_PLAYER_SETTINGS]: hideSettingsPage,
    [SET_STOPPED]: setStopped,
    [TOGGLE_AUDIO_OUTPUT]: toggleAudio




});


export default settingsReducer;


