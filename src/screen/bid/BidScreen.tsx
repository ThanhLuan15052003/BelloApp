import React from 'react';
import {View, SectionList} from 'react-native';
import stylesBid from '../../styles/bid/BidScreen';
import HeaderComponent from '../../components/HeaderComponent';
import BidCard from '../../components/BidCard';
import SectionHeader from '../../components/SectionHeader';
import useBid from '../../hooks/useBid';
import textContent from '../../lang/bidCardText.json';
interface CardItem {
  id: number;
  title: string;
  name: string;
  subtitle: string;
  color: string;
  coconut: string;
  price: string;
}

interface Section {
  title: string;
  data: CardItem[][];
}
const {
  sections,
  groupData,
  // eslint-disable-next-line react-hooks/rules-of-hooks
} = useBid();
const BidScreen: React.FC = () => {
  const renderItem = ({item}: {item: CardItem[]}) => (
    <View style={stylesBid.row}>
      {item.map(card => (
        <BidCard key={card.id} card={card} />
      ))}
      {item.length === 1 && <View style={stylesBid.cardPlaceholder} />}
    </View>
  );

  const renderSectionHeader = ({section: {title}}: {section: Section}) => (
    <SectionHeader title={title} />
  );

  return (
    <View style={stylesBid.container}>
      <HeaderComponent
        label={textContent.header.title}
        iconSource={require('../../../assets/image/bid.png')}
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
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={stylesBid.list}
      />
    </View>
  );
};

export default BidScreen;
