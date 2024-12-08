import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import stylesHistory from '../styles/history/HistoryScreen';
import textContent from '../lang/bidCardText.json';
const CardItemComponent: React.FC<CardItemProps> = ({card}) => (
  <View style={[stylesHistory.card, {borderColor: card.color}]}>
    <View style={stylesHistory.imageContainer}>
      <Image
        style={stylesHistory.image}
        source={{uri: 'https://via.placeholder.com/150'}}
      />
      <View style={stylesHistory.overlay}>
        <View style={stylesHistory.viewWinner}>
          <Image
            style={stylesHistory.imageUser}
            source={{uri: 'https://via.placeholder.com/150'}}
          />
          <View>
            <Text style={stylesHistory.winner}>{card.winner}</Text>
            <Text style={stylesHistory.role}>{card.location}</Text>
          </View>
        </View>
        <Text style={stylesHistory.textMessage}>{card.textMessage}</Text>
      </View>
    </View>

    <Text style={stylesHistory.subtitle}>{card.subtitle}</Text>

    <View style={stylesHistory.viewBox}>
      <View style={stylesHistory.viewCart}>
        <Text style={stylesHistory.name}>{card.name}</Text>
        <Text style={stylesHistory.title}>{card.title}</Text>
        <View style={stylesHistory.viewCoconut}>
          <Text style={stylesHistory.coconut}>{card.coconut}</Text>
          <Image source={require('../../assets/image/Icons.png')} />
        </View>
      </View>
    </View>

    <View style={stylesHistory.viewBox}>
      <View style={stylesHistory.viewParticipation}>
        <Text style={stylesHistory.name}>
          {textContent.labels.participation}
        </Text>
        <Text style={stylesHistory.name}>{card.participation}</Text>
      </View>
    </View>

    <View style={stylesHistory.viewBox}>
      <View style={stylesHistory.viewDate}>
        <View style={stylesHistory.viewDateTime}>
          <Image source={require('../../assets/image/calendar-days.png')} />
          <Text style={stylesHistory.date}>{card.date}</Text>
        </View>
        <View style={stylesHistory.viewBid}>
          <Image source={require('../../assets/image/bid.png')} />
          <Text style={stylesHistory.date}>{card.bid}</Text>
        </View>
      </View>
    </View>

    <View style={stylesHistory.viewBox}>
      <View style={stylesHistory.viewCart}>
        <Text style={stylesHistory.name}>{textContent.labels.soldTo}</Text>
        <View style={stylesHistory.viewCoconut}>
          <Text style={stylesHistory.soldPrice}>{card.soldPrice}</Text>
          <Image source={require('../../assets/image/coconuts.png')} />
        </View>
      </View>
    </View>

    <View style={stylesHistory.viewButton}>
      <View style={stylesHistory.buttonContainer}>
        <Text style={stylesHistory.buttonText}>
          {textContent.buttons.unlock}
        </Text>
        <TouchableOpacity style={stylesHistory.button}>
          <Text style={stylesHistory.buttonPrice}>{card.price}</Text>
          <Image source={require('../../assets/image/coconuts.png')} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default CardItemComponent;
