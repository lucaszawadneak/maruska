import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { format } from 'date-fns';
import DatePicker from 'react-native-date-picker';
import Button from '~/components/Button/index';
import { petProblem } from '~/store/modules/pets/actions';

import { Container, InputLabel, DateHolder, Input } from './styles';

export default function ProblemAdd({ route, navigation }) {
  const { petID } = route.params;

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleProblem = async () => {
    const surgery = { title, date, description };
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(surgery))) {
      return Alert.alert('Maruska', 'Please enter valid information');
    }

    const day = format(date, 'dd/MM/yyyy');
    const time = format(date, 'HH:mm');

    dispatch(petProblem({ ...surgery, day, time }, petID));
    navigation.goBack();
  };

  return (
    <Container>
      <InputLabel>Problem title</InputLabel>
      <Input maxLength={25} onChangeText={setTitle} />
      <InputLabel>Problem description</InputLabel>
      <Input maxLength={100} onChangeText={setDescription} />
      <InputLabel>When did it happened?</InputLabel>
      <DateHolder>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="datetime"
          locale="en"
        />
      </DateHolder>
      <Button title="Add Problem" onPress={handleProblem} />
    </Container>
  );
}

ProblemAdd.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};