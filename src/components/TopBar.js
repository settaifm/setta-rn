import React from 'react';
import {Dimensions, View,Linking} from 'react-native';
import {Button, Text, theme} from 'galio-framework';
import {appStyles as styles} from '../layout/constants/generic-styles';
import {ErrorProgressBar, BufferingProgressBar} from './BufferingProgressBar';



const { width } = Dimensions.get('screen');


export function TopBar() {



    function onFacebookPagePressed() {

      // Linking.openURL("https://www.facebook.com/settaifm/");
        //
        let url = "fb://profile/settaifm";

        Linking.canOpenURL(url).then(supported => {
            if (supported) {

                //return Linking.openURL(url);
                return Linking.openURL("https://www.facebook.com/settaifm/");
            } else {
                return Linking.openURL("https://www.facebook.com/settaifm/");
            }
        })
    }

    return (
        <View style={{flex: 1, flexDirection: 'row' }}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <Button
                    round
                    onlyIcon
                    shadowless
                    icon="facebook"
                    iconFamily="font-awesome"
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE *1.625}
                    color={theme.COLORS.BLACK}
                    onPress ={() => onFacebookPagePressed()}
                    style={[styles.alignrightpos]}

                />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
               <BufferingProgressBar/>
               <ErrorProgressBar/>
            </View>
        </View>
        </View>
        )
}


