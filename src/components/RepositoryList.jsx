import React from 'react';
import {View, Text} from 'react-native';
import repositories from '../data/repositories';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
    return (
    <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <View style={{height: 20}}></View>}
        renderItem={({item: repo}) => (<RepositoryItem {...repo} />)}
    >
    </FlatList>
  );
}

export default RepositoryList;