import React from 'react';
import { Image, StyleSheet, TouchableNativeFeedback, View, Alert } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';


const RepositoryItemsHeader = (props) => (
    <View style={styles.header}>

        <TouchableNativeFeedback onPress={()=>Alert.alert(props.ownerAvatarUrl)}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
            </View>
        </TouchableNativeFeedback>
        <View style={{flex:1}}>
            <StyledText fontSize='subheading' fontWeight='bold'>id: {props.id}</StyledText>
            <StyledText>fullName: {props.fullName}</StyledText>
            <StyledText>description: {props.description}</StyledText>
            <StyledText style={styles.language}>language: {props.language}</StyledText>
        </View>
    </View>
)


const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 6,
        overflow: 'hidden', /* para el borderRadius de texto, sino no funciona */
        marginTop: 4,
        marginBottom: 4, /* Se puede usar marginVertical para reemplazar a marginTop y marginBottom */
    },
    image: {
        width: 50, /* la imagen debe tener tamanio, sino no se muestra */
        height: 50,
        borderRadius: 15,
    },
    header: { 
        flexDirection: 'row', 
        paddingRight: 2 
    }
});

export default RepositoryItemsHeader;