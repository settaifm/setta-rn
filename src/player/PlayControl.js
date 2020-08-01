import {useDispatch, useSelector} from 'react-redux';
import {Dimensions, Image, Linking} from 'react-native';

import React, {useState, useEffect, Fragment} from 'react';
import {Block, Button, theme} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles';


import {TOGGLE_AUDIO_OUTPUT} from '../core/settings-store';
import TrackPlayer from 'react-native-track-player';
import {pauseFm, playFm} from './play-services';

const { height, width } = Dimensions.get('screen');
export  function PlayControl() {

    const {output_speaker,initialized,isPlaying} = useSelector(state => state.settings);
    const {isBuffering} = useSelector(state => state.player);

    const [playing, setPlaying] = useState(isPlaying);
    const [inProgress, setInProgress] = useState(false);





    const onTogglePlayPressed = async () => {


        if(inProgress)
            return
        setInProgress(true);
        setPlaying(!isPlaying);


        if (isPlaying) {
            await pauseFm()
        } else {
            await playFm();
        }


        await setInProgress(false);

    }





   const onTogglePitchPressed = async () => {

        const modifiedStateToPlayInSpeaker = !output_speaker;

        //await setPlayInSpeaker(modifiedStateToPlayInSpeaker)

        //dispatch({type:TOGGLE_AUDIO_OUTPUT})

    }

    const dispatch = useDispatch();
    const playPauseIcon =playing?"pause":"play"
    const speakerIcon =output_speaker?"phone-bluetooth-speaker":"speaker"

    let playPauseButton =    <Button
        round
        onlyIcon
        shadowless
        icon={playPauseIcon}
        iconFamily="font-awesome"
        iconColor={theme.COLORS.WHITE}
        iconSize={theme.SIZES.BASE * 4.625}
        color={theme.COLORS.BLACK}
        onPress={() => onTogglePlayPressed()}
        style={[styles.playbutton, styles.shadow]}
    />
    if(isBuffering)
        playPauseButton =<Fragment></Fragment>

    return (<Block row center space="between">
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
                            icon={speakerIcon}
                            iconFamily="MaterialIcons"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 4.625}
                            color={theme.COLORS.BLACK}
                            onPress={() => onTogglePitchPressed()}
                            style={[styles.playbutton, styles.shadow]}
                        />
                    </Block>
                </Block>

    )
}


