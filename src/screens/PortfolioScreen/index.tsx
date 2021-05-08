import React from 'react';
import {View, Text,Image, FlatList} from 'react-native';
import styles from './styles';
import PortfolioCoin from "../../components/PortfolioCoin";
const image = require('../../../assets/images/Saly-10.png');

const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'USD',
    amount: 69.420,
    valueUSD: 69.420,
},
{
    id: '2',
    name: 'Bitcoin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'USD',
    amount: 1.12,
    valueUSD: 69.420,
},
{
    id: '3',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420,
},
{
    id: '3',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420,
},
{
    id: '3',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420,
},
{
    id: '3',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420,
},
{
    id: '3',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420,
},
{
    id: '3',
    name: 'Etherium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420,
}]

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
           
        <FlatList
            style={{width: '100%'}}
            data={portfolioCoins}
            renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems: 'center'}}
            ListHeaderComponent={() =>(
            <>
                <Image style={styles.image} source={image} />
                  <View style={styles.balanceContainer}>
                  <Text style={styles.label}>Portfolio balance</Text>
                  <Text style={styles.balance}>$69.420</Text>
                  </View>
                  </>
                  )}
            />
        
    </View>
    );
};

export default PortfolioScreen;
