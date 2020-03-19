import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Maruska from '~/components/MaruskaLogo/index';
import changeStatus from '~/store/modules/modalVisible/actions';
import Modal from './AddModal/index';

import FAB from '~/components/FAB/index';

import {
  Container,
  PetList,
  Box,
  PetImage,
  TextHolder,
  Name,
  Info,
} from './styles';

import logo from '~/assets/img/logo.png';

export default function Home({ navigation }) {
  const pets = useSelector(state => state.pets.data);

  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(changeStatus(0));
  };

  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Maruska source={logo} />
      <Modal />
      <FAB onPress={handleOpen} />
      <PetList
        showsVerticalScrollIndicator={false}
        data={pets}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Box onPress={() => navigation.navigate('Pet', { pet: item })}>
            <PetImage
              nullImage={item.avatar}
              source={
                item.avatar
                  ? { uri: `data:image/*;base64,${item.avatar}` }
                  : null
              }
            />
            <TextHolder>
              <Name>{item.name}</Name>
              <Info>{`${item.sex} ${item.breed ? item.breed : ''}`}</Info>
              <Info>{item.date}</Info>
            </TextHolder>
          </Box>
        )}
      />
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};
