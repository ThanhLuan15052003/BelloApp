import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesBid from '../styles/bid/BidScreen';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title}) => (
  <View style={stylesBid.viewTitle}>
    <Image source={require('../../assets/image/calendar-days.png')} />
    <Text style={stylesBid.sectionHeader}>{title}</Text>
  </View>
);

export default SectionHeader;
