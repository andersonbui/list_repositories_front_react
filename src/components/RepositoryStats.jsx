import React from "react";
import { View, StyleSheet} from "react-native";
import StyledText from "./StyledText";



const parseThousands = (number) => {
    return number > 999 ? (number / 1000).toFixed(1) + 'K' : number;
}

const RepositoryStats = (props) => (
    <View style={styles.stats}>
        <View>
            <StyledText align='center' fontWeight='bold'>starts</StyledText>
            <StyledText align='center'>{parseThousands(props.startgazersCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>forks</StyledText>
            <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Rating</StyledText>
            <StyledText align='center'>{parseThousands(props.ratingAverage)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Review</StyledText>
            <StyledText align='center'>{parseThousands(props.reviewCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>ownerAvatarUrl</StyledText>
            <StyledText align='center'>{props.ownerAvatarUrl}</StyledText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
});

export default RepositoryStats;