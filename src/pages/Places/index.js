import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';

import { Alert, Linking } from 'react-native';
import changeStatus from '~/store/modules/modalVisible/actions';
import Modal from './AddModal/index';
import { deleteLocation } from '~/store/modules/places/actions';

import {
  Container,
  PlaceList,
  Box,
  Name,
  Info,
  ButtonHolder,
  Button,
  TextHolder,
} from './styles';
import Maruska from '~/components/MaruskaLogo/index';

import FAB from '~/components/FAB/index';

export default function Places() {
  const places = useSelector(state => state.places.data);

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(changeStatus(1));
  };

  const handleCall = phone => {
    const url = `tel://${phone}`;
    Linking.openURL(url);
  };

  const handleMaps = (address, city) => {
    const url = `geo://0,0?q=${address} - ${city}`;
    Linking.openURL(url);
  };

  const handleDelete = ID => {
    Alert.alert(
      'Are you sure you want to do this?',
      'You will not get this information back!',
      [
        {
          text: "I'm sure",
          onPress: () => {
            dispatch(deleteLocation(ID));
          },
        },
        { text: 'Cancel' },
      ]
    );
  };

  return (
    <Container>
      <Maruska />
      <FAB onPress={handleOpen} />
      <Modal />
      <PlaceList
        data={places}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Box>
            <TextHolder>
              <Name>{item.name}</Name>
              <Info>{item.kind}</Info>
              <Info>{item.city}</Info>
            </TextHolder>
            <ButtonHolder>
              <Button onPress={() => handleCall(item.phone)}>
                <Icon name="phone" size={28} color="#fff" />
              </Button>
              <Button onPress={() => handleMaps(item.address, item.city)}>
                <Icon name="car" size={28} color="#fff" />
              </Button>
              <Button onPress={() => handleDelete(item.name)}>
                <Icon name="trash-can" size={28} color="#fff" />
              </Button>
            </ButtonHolder>
          </Box>
        )}
      />
    </Container>
  );
}
