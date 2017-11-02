
import React from 'react';
import { StyleSheet } from 'react-native';
import Color from '../Utils/Color';


export default StyleSheet.create({
    navigator: {
        backgroundColor: Color.MAIN
    },
    container: {
        backgroundColor: Color.BACKGROUND,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    listView: {
        backgroundColor: Color.BACKGROUND,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    loading: {
        backgroundColor: Color.BACKGROUND,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    loadingInfo: {
        fontSize: 14,
        color: Color.SUB
    },

    cell: {
        height: 84,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        borderBottomWidth: 1,
        borderColor: Color.BORDER
    },
    cellWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleWrapper: {
        flex: 1,
        marginBottom: 5
    },
    cellTitle: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: Color.MAIN,
        height: 36,
        minHeight: 36,
        overflow: 'hidden'
    },
    cellCategory: {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 4,
        borderRadius: 4
    },
    cellCategoryText: {
        padding: 4,
        backgroundColor: Color.FADE,
        borderRadius: 4
    },
    cellCategoryTextColor: {
        fontSize: 12,
        color: 'white'
    },
    cellOtherInfoText: {
        padding: 4,
        paddingLeft: 8,
        fontSize: 12,
        color: Color.SUB
    },
    cellOtherWrapper: {
        width: 70,
        position: 'relative'
    },
    cellAvatar: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        zIndex: 5,
        marginLeft: -20,
        backgroundColor: Color.MAIN
    },
    cellReplies: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent:'center',
        marginTop: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        zIndex: 3,
        left: 40,
        backgroundColor: Color.BORDER,
        overflow: 'hidden'
    },
    cellRepliesText: {

    }
});
