import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;

const HeaderText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const NameInput = styled.TextInput`
  border: 1px solid #ccc;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 50px;
`;

const NextButton = styled.Button``;

const Page = props => {
  const nextAction = () => {
    if (!props.name) {
      alert('Você Precisa de um nome!');
    }

    props.navigation.navigate('StartedDias');
  };

  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({name: t});
  };

  return (
    <Container>
      <HeaderText>Qual é o seu nome?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />

      <NextButton title="Próximo" onPress={nextAction} />
    </Container>
  );
};

Page.navvigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Você Precisa de um nome!');
      return;
    }

    navigation.navigate('StartedDias');
  };

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapToStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};

export default connect(
  mapToStateToProps,
  mapDispatchToProps,
)(Page);
