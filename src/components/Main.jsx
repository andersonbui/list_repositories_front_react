import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Redirect, Route, Routes} from 'react-router-native';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes >
                <Route path="/" element={<RepositoryList />} exact>
                </Route>
                <Route path="/signin" element={<Text>hola</Text>} exact>
                </Route>
                <Route path="/about" element={<Text>about</Text>}>
                    <Route path="team" element={<Text>team</Text>} />
                    <Route path="history" element={<Text>history</Text>} />
                </Route>
                <Route path="/contact" element={<Text>contact</Text>} />
            </Routes>
    
            <StatusBar style="auto" />
        </View>
    )
}

export default Main