import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, StyleSheet} from 'react-native';

import React, {Fragment, useEffect, useState} from 'react';

import {STATE_BUFFERING, STATE_PLAYING, STATE_STOPPED} from 'react-native-track-player';
import {Block} from 'galio-framework';
import {materialTheme} from '../layout/constants';
import {PlayControl} from './PlayControl';


import {addErrorListener, addPlayBackStateListener, initPlayer} from './play-services';
import {SET_PLAY_ERROR, SET_PLAY_STATE} from './player-store';
import {SET_NOT_PLAYING, SET_PLAYING, SET_STOPPED} from './settings-store';

const {height, width} = Dimensions.get('screen');

const FM_URL = 'http://stream.zeno.fm/b0qy1rp884zuv';

export function Player() {

    const {error} = useSelector(state => state.player);
    const [playerState, setState] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const {url,isStopped} = useSelector(state => state.settings);


    const dispatch = useDispatch();


    useEffect(() => {


        let listeners=null;

        if (null == url) {
            return;
        }


        function setPlayState(state) {

            console.log(state)

           dispatch({type: SET_PLAY_STATE,"payload":state});


                if (state == STATE_PLAYING || state == STATE_BUFFERING) {
                    dispatch({type: SET_PLAYING});
                } else {
                    dispatch({type: SET_NOT_PLAYING});
                    if (state == STATE_STOPPED){
                        dispatch({type: SET_STOPPED});
                    }
                }

        }

        async function initialize() {

            await initPlayer(url);
            setLoaded(true);
            dispatch({type: SET_PLAYING});

            listeners = addPlayBackStateListener((evt) => {

                setPlayState(evt['state']);
            });

            const errorListener = addErrorListener((evt) => {

                dispatch({type: SET_PLAY_ERROR,payload:evt});
            });


            listeners.push(errorListener)

        }


        initialize();

        return () => {
            if(listeners){

                listeners.forEach(listener=>{
                    listener.remove()
                })


            }



        }

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



const styles = StyleSheet.create({

    pro: {
        backgroundColor: materialTheme.COLORS.LABEL,
        paddingHorizontal: 8,
        marginLeft: 12,
        borderRadius: 2,
        height: 22,
    },

    bottomContainer: {


        marginLeft: 12,
        marginRight: 12,
        marginBottom: 12


    }
});
