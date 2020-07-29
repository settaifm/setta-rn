import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dimensions} from 'react-native';
import {Block, Button, Slider, theme} from 'galio-framework';
import {appStyles as styles} from '../../constants/generic-styles'


const { width } = Dimensions.get('screen');




export function VolumeControl() {
    const {isMuted,volume} = useSelector(state => state.player);
    const {playbackInstance} = useSelector(state => state.settings);
    const dispatch = useDispatch();


    const onMutePressed = async () => {
        await playbackInstance.setIsMutedAsync(!isMuted);
    }

    const onVolumeSliderValueChange = async (value) => {
        await playbackInstance.setVolumeAsync(value);

    }


    const buttonIcon = isMuted?"volume-mute":"volume-up"

    return (<Block flex>
        <Button
            onPress={() => onMutePressed()}
            round
            onlyIcon
            shadowless
            icon={buttonIcon}
            iconFamily="font-awesome"
            iconColor={theme.COLORS.WHITE}
            iconSize={theme.SIZES.BASE * 1.625}
            color={theme.COLORS.TWITTER}
            style={[styles.social, styles.shadow]}
        /><Slider style={styles.volumeSlider} value={1} onValueChange={(evt) => onVolumeSliderValueChange(evt)}/></Block>)


}
