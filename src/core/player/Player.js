import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, StyleSheet, View} from 'react-native';

import React, {Fragment, useEffect} from 'react';

import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {Block, Text} from 'galio-framework';
import {materialTheme} from '../../constants';
import {PlayControl} from '../components/PlayControl';
import {Deemwar} from '../components/Deemwar';
import {initPlayer} from '../play-services';


const { height, width } = Dimensions.get('screen');


const FM_URL ="http://stream.zeno.fm/b0qy1rp884zuv";



export function Player() {

    const {isLoaded,error} = useSelector(state => state.player);
    const {url} = useSelector(state => state.settings);
    const playbackState = usePlaybackState();

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


        }

        loadSound()


    }, [url]);



    let component =<Fragment></Fragment>

    if(isLoaded)
        component =<PlayControl/>;



    return (<Fragment><Block row top>
                        <View style={{
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


                    </Block>


                <Block row style={styles.bottomContainer} >
                    {component}
                </Block></Fragment>);




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
