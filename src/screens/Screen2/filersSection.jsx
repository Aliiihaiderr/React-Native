import React from 'react';
import Filter from '../../assets/icons/Filter';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

const countries = [
  { country: "American" },
  { country: "Asian" },
  { country: "British" },
  { country: "Caribbean" },
  { country: "Chinese" },
  { country: "French" },
  { country: "Greek" },
  { country: "Indian" },
  { country: "Italian" },
  { country: "Japanese" },
  { country: "Thai" },
  { country: "Korean" },
  { country: "Latin American" },
  { country: "Mediterranean" },
  { country: "Mexican" },
  { country: "Middle Eastern" },
  { country: "Spanish" },
];


const FilersSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterMenu}>
        <Filter />
      </TouchableOpacity>
      <FlatList
        data={countries}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.country}
        renderItem={({ item }) => (
          <View style={styles.countryContainer}>
            <Text>{item.country}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    flexDirection: 'row'
  },
  filterMenu: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryContainer: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 100,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFD',
    marginRight: 12,
    // backgroundColor:'red',
  },
  itemText: {
    fontSize: 14,
    color: '#292929',
    fontFamily: 'Inter-SemiBold',
  }
})

export default FilersSection;
