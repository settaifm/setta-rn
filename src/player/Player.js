import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, StyleSheet, View} from 'react-native';

import React, {Fragment, useEffect, useState} from 'react';

import {STATE_BUFFERING, STATE_PAUSED, STATE_PLAYING, STATE_STOPPED} from 'react-native-track-player';
import {Block, Text} from 'galio-framework';
import {materialTheme} from '../layout/constants';
import {PlayControl} from './PlayControl';
import {Deemwar} from '../components/Deemwar';


import {addPlayBackErrorListener, addPlayBackStateListener, initPlayer} from './play-services';
import {SET_PLAY_ERROR, SET_PLAY_STATE} from './player-store';
import {SET_NOT_PLAYING, SET_PLAYING} from '../core/settings-store';

const {height, width} = Dimensions.get('screen');

const FM_URL = 'http://stream.zeno.fm/b0qy1rp884zuv';

export function Player() {

    const {error} = useSelector(state => state.player);
    const [playerState, setState] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const {url} = useSelector(state => state.settings);


    const dispatch = useDispatch();


    useEffect(() => {


        if (null == url) {
            return;
        }


        function setPlayState(state) {

            const playStatuses = [STATE_PLAYING, STATE_PAUSED, STATE_STOPPED, STATE_BUFFERING];
            if (playStatuses.includes(state)) {
                dispatch({type: SET_PLAY_STATE, payload: state});
            }
            const settingStatus = [STATE_PLAYING, STATE_PAUSED, STATE_STOPPED,STATE_BUFFERING];
            if (settingStatus.includes(state)) {

             //   console.log("Going to update setting",state)

                if (state == STATE_PLAYING || state == STATE_BUFFERING) {
                    dispatch({type: SET_PLAYING});
                } else {
                    dispatch({type: SET_NOT_PLAYING});
                }
            }
        }

        async function initialize() {
            await initPlayer(url);
            setLoaded(true);
            dispatch({type: SET_PLAYING});

            addPlayBackStateListener((evt) => {
                setPlayState(evt['state']);
            });
            addPlayBackErrorListener((evt) => {
                console.log('playback error', evt);
                dispatch({type: SET_PLAY_ERROR, evt});
            });
        }


        initialize();


    }, [url]);


    let component = <Fragment></Fragment>;

    if (loaded) {
        component = <PlayControl/>;
    }


    return (<>
        <Block row style={styles.bottomContainer}>
            {component}
        </Block></>);


}


function AudioRate() {

}


function ProgressBar() {

}

const styles = StyleSheet.create({

    pro: {
        backgroundColor: materialTheme.COLORS.LABEL,
        paddingHorizontal: 8,
        marginLeft: 12,
        borderRadius: 2,
        height: 22,
    },
    trademark: {
        backgroundColor: materialTheme.COLORS.LABEL,
        borderRadius: 2
    },
    bottomContainer: {


        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12


    }
});
