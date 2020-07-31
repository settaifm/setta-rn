import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, StyleSheet, View} from 'react-native';

import React, {Fragment, useEffect, useState} from 'react';

import TrackPlayer, {STATE_PLAYING, STATE_READY, usePlaybackState} from 'react-native-track-player';
import {Block, Text} from 'galio-framework';
import {materialTheme} from '../layout/constants';
import {PlayControl} from '../components/PlayControl';
import {Deemwar} from '../components/Deemwar';


import {initPlayer} from './play-services';
import {SET_PLAY_STATE} from "./player-store";

const { height, width } = Dimensions.get('screen');

const FM_URL ="http://stream.zeno.fm/b0qy1rp884zuv";

export function Player() {

    const {error} = useSelector(state => state.player);
    const [playerState, setState] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const {url} = useSelector(state => state.settings);


    const dispatch = useDispatch();

    async function setup() {
        await TrackPlayer.setupPlayer({});
        await TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_STOP
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE
            ]
        });
    }

    useEffect(() => {



        if(null == url)
            return;



        async function loadSound() {
            await setup();
            //await setPlayInSpeaker(true)
            await initPlayer(dispatch,url)


            TrackPlayer.addEventListener('playback-state', (evt) => {

                if(evt['state']===STATE_READY || evt['state']===STATE_PLAYING){
                    setLoaded(true)
                }

                dispatch({type:SET_PLAY_STATE,payload:evt['state']})
            });

            TrackPlayer.addEventListener('playback-error', (evt) => {
                console.log("playback error",evt)
                dispatch({type:SET_PLAY_ERROR,evt})
            });



           // const isPlaying = playerState === STATE_PLAYING;


        }

        loadSound()


    }, [url]);



    let component =<Fragment></Fragment>

    if(loaded)
        component =<PlayControl/>;



    return (<><View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>
                            <Block row top middle>
                                <Text color="white" size={60}>Settai FM</Text>

                                <Block top style={styles.pro}>
                                    <Text size={16} color="white">24 hours</Text>
                                </Block>
                            </Block>
                            <Deemwar/>
                        </View>




                <Block row style={styles.bottomContainer} >
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
        height: 22
    },
    bottomContainer: {


        marginLeft: 12,
        marginRight: 12,
        marginBottom:12


    }
});
