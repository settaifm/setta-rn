import {createReducer} from "../config/create-reducer";


export const SET_INSTANCE = "settings/set_instance";
export const TOGGLE_AUDIO_OUTPUT = "settings/toggle_audio_output";
export const SET_URL = "settings/seturl";
export const SET_PLAYING_IN_SETTING = "settings/setPlaying";
export const SET_INTERNET_STATUS = "settings/setInternetAvailable";



const FM_URL ="http://stream.zeno.fm/b0qy1rp884zuv";

const initialState = {

    playbackInstance: null,
    url:FM_URL,
    output_speaker:true,
    isPlaying:true,
    isInternetReachable:true


};



const setInternetReachable =(state,action)=>{

    return { ...state, isInternetReachable:action.payload}

};



const setInstance =(state,action)=>{

    return { ...state, playbackInstance:action.payload}

};



const setAudioUrl =(state,action)=>{


    return { ...state, url:action.payload }


};
const setPlaying =(state,action)=>{


    return { ...state, isPlaying:action.payload }


};

const toggleAudio =(state,action)=>{

    const modifiedState = !state.output_speaker;

    return { ...state,   output_speaker:modifiedState}

};




const settingsReducer = createReducer(initialState, {
    [SET_INSTANCE]: setInstance,
    [SET_INTERNET_STATUS]: setInternetReachable,
    [SET_URL]: setAudioUrl,
    [SET_PLAYING_IN_SETTING]: setPlaying,
    [TOGGLE_AUDIO_OUTPUT]: toggleAudio




});


export default settingsReducer;


