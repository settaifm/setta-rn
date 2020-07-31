import {createReducer} from "../config/create-reducer";
import {
    State,
    STATE_BUFFERING,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_READY,
    STATE_STOPPED,
} from 'react-native-track-player';



export const SET_PLAY_STATE = "player/setstate";
export const SET_PLAY_ERROR = "player/seterror";
/*

export type AVPlaybackStatus =
  | {
      isLoaded: false;
      androidImplementation?: string;
      error?: string; // populated exactly once when an error forces the object to unload
    }
  | {
      isLoaded: true;
      androidImplementation?: string;

      uri: string;

      progressUpdateIntervalMillis: number;
      durationMillis?: number;
      positionMillis: number;
      playableDurationMillis?: number;
      seekMillisToleranceBefore?: number;
      seekMillisToleranceAfter?: number;

      shouldPlay: boolean;
      isPlaying: boolean;
      isBuffering: boolean;

      rate: number;
      shouldCorrectPitch: boolean;
      volume: number;
      isMuted: boolean;
      isLooping: boolean;

      didJustFinish: boolean; // true exactly once when the track plays to finish
    };
 */


const initialState = {
    playerState:"",
    error:null,
    isPlaying:false,
    isPaused:false,
    isStopped:false,
    isBuffering: false,
    isReady: false,


};




const setState =(state,action)=>{
    //
    // const allStates = [""]
    //     {
    //     "STATE_PLAYING":"1",
    //     "STATE_PAUSED":"2",
    //     "STATE_STOPPED":"3",
    //     "STATE_BUFFERING":"4",
    //     "STATE_READY":"5",
    // }
    //
    //

   const isPlaying = (action.payload===STATE_PLAYING)
   const isPaused = (action.payload===STATE_PAUSED)
   const isBuffering = (action.payload===STATE_BUFFERING)
   const isStopped = (action.payload===STATE_STOPPED)
   const isReady = (action.payload===STATE_READY)

    //
    // console.log("playing",action.payload===STATE_PLAYING)
    // console.log("paused",action.payload===STATE_PAUSED)
    // console.log("Buffering",action.payload===STATE_BUFFERING)
    // console.log("Stopped",action.payload===STATE_STOPPED)
    // console.log("Stopped",action.payload===STATE_READY)
    return { ...state,playerState:action.payload,isPlaying,isPaused,isBuffering,isStopped,isReady}

};


const setError =(state,action)=>{


    return { ...state,error:action.payload}

};






const playerReducer = createReducer(initialState, {
    [SET_PLAY_STATE]: setState,
    [SET_PLAY_ERROR]: setError



});


export default playerReducer;
/*

  _onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
        shouldCorrectPitch: status.shouldCorrectPitch
      });
      if (status.didJustFinish && !status.isLooping) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };
 */

//
// export const onPlaybackStatusUpdate = (dispatch)  => {
//     dispatch({ type: PLAYING });
//
//     console.log("starting")
//     printNetworkElements(dispatch)
//
//     createSocket(dispatch)
//     dispatch({ type: PLAY });
//
//
// };

