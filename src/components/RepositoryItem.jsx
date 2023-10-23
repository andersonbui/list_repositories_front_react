import React from 'react';
import { View, StyleSheet} from 'react-native';
import RepositoryStats from './RepositoryStats';
import RepositoryItemsHeader from './RepositoryItemsHeader';



const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemsHeader {...props} />
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5, /* Se puede usar paddingVertical para reemplazar a paddingTop y paddingBottom */
        paddingTop: 5,
    }
});

export default RepositoryItem;