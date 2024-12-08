import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import stylesBid from '../styles/bid/BidScreen';
import textContent from '../lang/bidCardText.json';
interface CardItem {
  id: number;
  title: string;
  name: string;
  subtitle: string;
  color: string;
  coconut: string;
  price: string;
}

interface BidCardProps {
  card: CardItem;
}

const BidCard: React.FC<BidCardProps> = ({card}) => (
  <View style={[stylesBid.card, {borderColor: card.color}]}>
    <Image
      style={stylesBid.image}
      source={{uri: 'https://via.placeholder.com/150'}}
    />
    <Text style={stylesBid.subtitle}>{card.subtitle}</Text>
    <View style={stylesBid.viewBox}>
      <View style={stylesBid.viewCart}>
        <Text style={stylesBid.name}>{card.name}</Text>
        <Text style={stylesBid.title}>{card.title}</Text>
        <View style={stylesBid.viewCoconut}>
          <Text style={stylesBid.coconut}>{card.coconut}</Text>
          <Image source={require('../../assets/image/Icons.png')} />
        </View>
      </View>
    </View>
    <View style={stylesBid.viewButton}>
      <View style={stylesBid.buttonContainer}>
        <Text style={stylesBid.buttonText}>{textContent.buttons.unlock}</Text>
        <TouchableOpacity style={stylesBid.button}>
          <Text style={stylesBid.buttonPrice}>{card.price}</Text>
          <Image source={require('../../assets/image/coconuts.png')} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default BidCard;
