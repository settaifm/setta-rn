import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dimensions} from 'react-native';
import {Block, Button, Slider, theme} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles'
import {SET_VOLUME} from '../core/settings-store';
import {throttle} from '../shared/services';
import {setPlayerVolume} from '../player/play-services';



const { width } = Dimensions.get('screen');




export function VolumeControl() {

    const {volumeInSettings} = useSelector(state => state.settings);
    const dispatch = useDispatch();
    const [volume, setVolume] = useState(volumeInSettings);


    const onVolumeSliderValueChange = async (value) => {

        setVolume(value)
        throttle(()=>{
            setPlayerVolume(value);
            dispatch({type:SET_VOLUME,payload:value})
        },1000)



    }



    return (<Block flex>


     </Block>)


}
