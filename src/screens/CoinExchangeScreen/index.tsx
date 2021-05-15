import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
const image = require('../../../assets/images/Saly-31.png');
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';


const CoinExchangeScreen = () => {
const [coinAmount, setCoinAmount] = useState(initialState:'')
const [coinUSDValue, setCoinUSDValue] = useState(initialState:'')

    const route = useRoute();
    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;
  
    useEffect( effect: () => {
        const amount = parseFloat(coinAmount)
        if (!amount) {
           setCoinAmount( value:"");
           setCoinUSDValue(value: "");
           return;
        }
        setCoinUSDValue((amount * coinData?.currentPrice).toString());
    }, deps: [coinAmount]);
   
return (
    
    <View style={styles.root}>
<Text style={styles.title}>
     {isBuy ? 'Buy' : "Sell "}
     {coinData?.name}
      </Text>
      <Text style={styles.subtitle}>
          1 {coinData?.symbol}
          {' = '}
          ${coinData?.currentPrice}
      </Text>
      <Image style={styles.image} source={image} />

      <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
              <TextInput
              keyboardType="decimal-pad"
               placeholder="0"
              value={coinAmount}
              onChangeText={setCoinAmount}
              
              />
              <Text>{coinData?.symbol}</Text>
          </View>
          <Text style={{fontSize: 30}}>=</Text>
          <View style={styles.inputContainer}>
              <TextInput
               keyboardType="decimal-pad"
               placeholder="0"/>
               value={coinUSDValue}
               onChangeText={setCoinUSDValue}
              <Text>USD</Text>
          </View>
      </View>
    </View>
);
};



export default CoinExchangeScreen;




