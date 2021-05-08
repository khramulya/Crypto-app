import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import UserRankingItem from '../../components/UserRankingItem';
const image = require('../../../assets/images/Saly-20.png');

const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    netWorth: 69420,
},
{
    id: '2',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    netWorth: 30420,
}]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
           
        <FlatList
            style={{width: '100%'}}
            data={portfolioCoins}
            renderItem={({item, index}) => <UserRankingItem user={item} place={index + 1} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Rankings</Text>
          </>
        )}
      />
        
    </View>
    );
};

export default PortfolioScreen;

