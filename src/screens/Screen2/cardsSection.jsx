import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import BookmarkIcon from '../../assets/icons/bookMark';
import StarIcon from '../../assets/icons/starIcon';
import ClockIcon from '../../assets/icons/clockIcon';

const meals = [
  {
    id: '1',
    image: require('../../assets/images/item1.png'),
    country: 'American',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '2',
    image: require('../../assets/images/item2.png'),
    country: 'British',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '3',
    image: require('../../assets/images/item1.png'),
    country: 'American',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '4',
    image: require('../../assets/images/item2.png'),
    country: 'British',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'British Flapjacks',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '5',
    image: require('../../assets/images/item1.png'),
    country: 'American',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '6',
    image: require('../../assets/images/item2.png'),
    country: 'British',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'British Flapjacks',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '7',
    image: require('../../assets/images/item1.png'),
    country: 'American',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '8',
    image: require('../../assets/images/item2.png'),
    country: 'British',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'British Flapjacks',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '9',
    image: require('../../assets/images/item1.png'),
    country: 'American',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
  {
    id: '10',
    image: require('../../assets/images/item2.png'),
    country: 'British',
    mealType: 'Breakfast',
    reviewPoints: 4.4,
    reviewsCount: 42,
    mealName: 'Summer Blast Salad With Avocado',
    time: '1.5hr',
    serving: '10/20',
  },
];

const CardsSection = () => {
  const truncate = (data) => {
    if (!data) return '';
    return data.length > 18 ? data.substring(0, 18) + '...' : data;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          marginBottom: 16,
          gap: 12,
        }}
        contentContainerStyle={{
          paddingBottom: 50,
        }}

        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.countryTitle}>
                <Text style={styles.titleText}>{item.country}</Text>
              </View>
              <View style={styles.addToFav}>
                <BookmarkIcon />
              </View>
            </View>
            <View>
              <View style={styles.reviewContainer}>
                <Text style={styles.mealType}>{item.mealType}</Text>
                <View style={styles.reviews}>
                  <Text style={styles.mealType}>{item.reviewPoints}</Text>
                  <StarIcon />
                  <Text style={styles.mealType}>({item.reviewsCount})</Text>
                </View>
              </View>
              <Text style={styles.mealName}>{truncate(item.mealName)}</Text>
              <View style={styles.timerContainer}>
                <View style={styles.timerBox}>
                  <ClockIcon />
                  <Text style={styles.timerText}>{item.time}</Text>
                </View>
                <View style={styles.timerBox}>
                  <ClockIcon />
                  <Text style={styles.timerText}>{item.serving}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    flex:1,
    padding: 8,
    gap: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 8,
    borderWidth: 0.3,
  },
  image: {
    width: '100%',
    height: 132,
    borderRadius: 8,
  },
  countryTitle: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#FAFAFACC',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  titleText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#292929',
  },
  addToFav: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealType: {
    fontSize: 10,
    color: '#EF443A',
    fontFamily: 'Inter-Medium',
  },
  reviews: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mealName: {
    fontSize: 14,
    color: '#2F3132',
    fontFamily: 'Inter-SemiBold',
  },
  timerContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timerText: {
    fontSize: 10,
    color: '#2F3132',
    fontFamily: 'Inter-Medium',
  },
});

export default CardsSection;
