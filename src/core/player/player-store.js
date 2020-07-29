import {createReducer} from "../../config/create-reducer";



export const SET_PLAY_STATE = "player/setstate";
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
    isLoaded:false,
    shouldPlay: false,
    rate: 1.0,
    shouldCorrectPitch: true,
    volume: 1.0,
    isMuted: false,
    isLooping: false,
    isBuffering:false,
    isPlaying:false,
    error:null


};




const setState =(state,action)=>{


    return { ...state,...action.payload}

};



const playerReducer = createReducer(initialState, {
    [SET_PLAY_STATE]: setState



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

