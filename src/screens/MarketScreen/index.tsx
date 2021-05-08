import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './styles';
import MarketCoin from "../../components/MarketCoin";
const image = require('../../../assets/images/Saly-17.png');

const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'USD',
    valueChange24H: 6,
    valueUSD: 69420,
},
{
    id: '2',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    valueChange24H: -1.675,
    valueUSD: 30420,
}]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
           
        <FlatList
            style={{width: '100%'}}
            data={portfolioCoins}
            renderItem={({item}) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Market</Text>
          </>
        )}
      />
        
    </View>
    );
};

export default PortfolioScreen;
