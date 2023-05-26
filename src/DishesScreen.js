import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import axios from 'axios';

const DishesScreen = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/dishes')
      .then((response) => setDishes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={dishes}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

export default DishesScreen;
