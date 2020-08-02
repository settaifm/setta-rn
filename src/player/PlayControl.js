import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, Image, Linking, Platform} from 'react-native';

import React, {useState, useEffect, Fragment} from 'react';
import {Block, Button, theme} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles';


import {SET_NOT_PLAYING, SET_PLAYING, SHOW_PLAYER_SETTINGS, TOGGLE_AUDIO_OUTPUT} from './settings-store';
import TrackPlayer, {
    PITCH_ALGORITHM_MUSIC,
    STATE_BUFFERING,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_STOPPED,
} from 'react-native-track-player';
import {addPlayBackErrorListener, addPlayBackStateListener, initPlayer, pauseFm, playFm} from './play-services';
import {SET_PLAY_ERROR, SET_PLAY_STATE} from './player-store';
import {debounce, throttle} from '../shared/services';

const { height, width } = Dimensions.get('screen');
export  function PlayControl() {

    const {output_speaker,initialized,isPlaying} = useSelector(state => state.settings);
    const {isBuffering} = useSelector(state => state.player);

    const [playing, setPlaying] = useState(isPlaying);
    const [inProgress, setInProgress] = useState(false);


    useEffect(() => {


            if(playing != isPlaying)
                setPlaying(isPlaying)

    }, [isPlaying]);



    const onTogglePlayPressed = async () => {
        //
        //


        if(inProgress)
            return
         setInProgress(true);



        setPlaying(!playing);




        if (isPlaying) {
            await pauseFm()
        } else {
            await playFm();
        }


        setInProgress(false);


    }



    const buttonSize = Platform.OS === 'ios' ?  3.625:4.625

   const onSettingsPressed = async () => {


        dispatch({type:SHOW_PLAYER_SETTINGS})

    }

    const dispatch = useDispatch();
    const playPauseIcon =playing?"pause":"play"
   // const speakerIcon =output_speaker?"phone-bluetooth-speaker":"speaker"

    let playPauseButton =    <Button
        round
        onlyIcon
        shadowless
        icon={playPauseIcon}
        iconFamily="font-awesome"
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * buttonSize}
        color={theme.COLORS.BLACK}
        onPress={() => onTogglePlayPressed()}
        style={[styles.playbutton]}
    />
    if(isBuffering)
        playPauseButton =<Fragment></Fragment>

    return (<Block row center space="between" style={[styles.playcontrolcontainer]}>
                    <Block flex middle left>
                        {playPauseButton}
                    </Block>
        <Block flex middle center>

            <Image
                style={styles.smallLogo}
                source={require("../../assets/images/settai-fm-small.png")}
            />

        </Block>
                <Block flex middle right>
                        <Button
                            round
                            onlyIcon
                            shadowless
                            icon="cog"
                            iconFamily="font-awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * buttonSize}
                            color={theme.COLORS.BLACK}
                            onPress={() => onSettingsPressed()}
                            style={[styles.playbutton]}
                        />
                    </Block>
                </Block>

    )
}


