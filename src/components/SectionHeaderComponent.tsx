import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesHistory from '../styles/history/HistoryScreen';

interface SectionHeaderProps {
  title: string;
}

const SectionHeaderComponent: React.FC<SectionHeaderProps> = ({title}) => (
  <View style={stylesHistory.viewTitle}>
    <Image source={require('../../assets/image/calendar-days.png')} />
    <Text style={stylesHistory.sectionHeader}>{title}</Text>
  </View>
);

export default SectionHeaderComponent;
