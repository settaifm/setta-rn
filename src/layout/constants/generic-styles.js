import {materialTheme} from "./index";

import {Dimensions ,StyleSheet} from "react-native";
import {  theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export const appStyles = StyleSheet.create({
    components: {
    },
    title: {
        paddingVertical: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
    },
    group: {
        paddingTop: theme.SIZES.BASE * 3.75,
    },
    fullwidth: {
        width:width *0.8
    },
    absolutepos: {


        zIndex: 1,
        alignSelf: 'flex-end',
        position: 'absolute',
        top:5,
        right: 5,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: width *0.8

    },
    alignrightpos: {

        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        backgroundColor:"blue",
        paddingEnd: 20,
        marginTop:20,
        marginEnd:20,
        paddingStart: 20
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 2,
    },
    button: {
        marginBottom: theme.SIZES.BASE,
        width: width - (theme.SIZES.BASE * 2),
    },
    volumeSlider: {
        width: width * 0.75
    },
    optionsText: {
        fontSize: theme.SIZES.BASE * 0.75,
        color: '#4A4A4A',
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.29,
    },
    optionsButton: {
        width: 'auto',
        height: 34,
        paddingHorizontal: theme.SIZES.BASE,
        paddingVertical: 10,
    },
    input: {
        borderBottomWidth: 1,
    },
    inputDefault: {
        borderBottomColor: materialTheme.COLORS.PLACEHOLDER,
    },
    inputTheme: {
        borderBottomColor: materialTheme.COLORS.PRIMARY,
    },
    inputInfo: {
        borderBottomColor: materialTheme.COLORS.INFO,
    },
    inputSuccess: {
        borderBottomColor: materialTheme.COLORS.SUCCESS,
    },
    inputWarning: {
        borderBottomColor: materialTheme.COLORS.WARNING,
    },
    inputDanger: {
        borderBottomColor: materialTheme.COLORS.ERROR,
    },
    imageBlock: {
        overflow: 'hidden',
        borderRadius: 4,
    },
    rows: {
        height: theme.SIZES.BASE * 2,
    },
    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        backgroundColor:"blue"

    },
    playbutton: {
        width: theme.SIZES.BASE * 4.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: 'center',

    },
    deemwarlogo: {
        fontStyle: 'italic',
        fontSize:12
    },
    deemwarlogocontainer: {
        paddingEnd:25
    },
    centerlogocontainer: {

        fontFamily:"Dosis-Bold",
        fontSize:48
    },
    modal:{

    },
    volslider:{
        color: "white"

    },
    text:{

        color: "white"
    },
    trademark: {

        backgroundColor: materialTheme.COLORS.LABEL,
        borderRadius: 2,
        paddingStart: 5,
        paddingEnd:5,
        marginStart:12

    },
    trademarkText: {
        fontFamily:"Dosis-Light",
        fontSize:12

    },
    smallLogo: {
        width: theme.SIZES.BASE * 10.5,
        height: theme.SIZES.BASE * 3.5


    },
    category: {
        backgroundColor: theme.COLORS.WHITE,
        marginVertical: theme.SIZES.BASE / 2,
        borderWidth: 0,
    },
    categoryTitle: {
        height: '100%',
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumThumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
    },
});
