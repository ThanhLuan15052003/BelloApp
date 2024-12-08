import React from 'react';
import {View, SectionList} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import stylesHistory from '../../styles/history/HistoryScreen';
import CardItemComponent from '../../components/CardItemComponent';
import SectionHeaderComponent from '../../components/SectionHeaderComponent';
import useHistory from '../../hooks/useHistory';
import textContent from '../../lang/bidCardText.json';
interface CardItem {
  id: number;
  title: string;
  name: string;
  textMessage: string;
  subtitle: string;
  color: string;
  coconut: string;
  price: string;
  participation: string;
  soldPrice: string;
  winner: string;
  role: string;
  date: string;
  bid: string;
  location: string;
}
const HistoryScreen: React.FC = () => {
  const {sections, groupData} = useHistory();
  const renderItem = ({item}: {item: CardItem[]}) => (
    <View style={stylesHistory.row}>
      {item.map(card => (
        <CardItemComponent key={card.id} card={card} />
      ))}
      {item.length === 1 && <View style={stylesHistory.cardPlaceholder} />}
    </View>
  );

  return (
    <View style={stylesHistory.container}>
      <HeaderComponent
        label= {textContent.header.titles}
        iconSource={require('../../../assets/image/hourglass.png')}
        progressSegments={5}
        completedSegments={5}
      />
      <SectionList
        sections={sections.map(section => ({
          ...section,
          data: groupData(section.data),
        }))}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={({section}) => (
          <SectionHeaderComponent title={section.title} />
        )}
        contentContainerStyle={stylesHistory.list}
      />
    </View>
  );
};

export default HistoryScreen;
