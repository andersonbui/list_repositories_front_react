import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    scroll: {
        flexGrow: 1,
        paddingBottom: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textSecondary,
    }
});

const AppBarTab = ({children, to}) => {
    const { pathname } = useLocation();
    const active = to === pathname;

    const textStyle = [
      styles.text,
      active && { color: active.active }
    ];
    
    return (
      <Link to={to} component={TouchableWithoutFeedback} underlayColor={{color: 'transparent'}} activeOpacity={0.5}/* activeOpacity de touch */ disabled={active} >
        <StyledText fontWeight='bold' style={textStyle}>
          {children}
        </StyledText>
      </Link>
    )
}

const AppBar = () => {
    return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll} >
        <AppBarTab to='/'>Repositorios</AppBarTab>
        <AppBarTab to='/signin'>Sign in</AppBarTab>
        <AppBarTab to='/signin'>uno mas largo que los otrs y aun mas</AppBarTab>
        <AppBarTab to='/signin'>otro mas largo que los otrs y aun mas</AppBarTab>
      </ScrollView>
    </View>
  );
}

export default AppBar;