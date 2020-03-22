import React, {useState} from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 30px;
`;

const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

const ListArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DayItem = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const DayItemText = styled.Text``;

const LevelItem = styled.TouchableHighlight`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const LevelItemText = styled.Text``;

const ResetButton = styled.Button``;

const Page = props => {
  const toogleWorkoutDay = d => {
    let newWorkoutDays = [...props.workoutDays];
    if (newWorkoutDays.includes(d)) {
      if (newWorkoutDays.length === 1) {
        alert('Calma ae! Você tem que treinar pelo menos 1 dia!');
        return;
      }

      newWorkoutDays = newWorkoutDays.filter(i => i !== d);
    } else {
      newWorkoutDays.push(d);
    }

    props.setWorkoutDays(newWorkoutDays);
  };

  const resetAction = () => {
    props.reset();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StartedStack'})],
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Label>Seu nome completo: </Label>
      <Input value={props.name} onChangeText={e => props.setName(e)} />

      <Label>Dias em que você treina:</Label>
      <ListArea>
        <DayItem
          onPress={() => toogleWorkoutDay(1)}
          style={
            props.workoutDays.includes(1) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>S</DayItemText>
        </DayItem>

        <DayItem
          onPress={() => toogleWorkoutDay(2)}
          style={
            props.workoutDays.includes(2) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>T</DayItemText>
        </DayItem>

        <DayItem
          onPress={() => toogleWorkoutDay(3)}
          style={
            props.workoutDays.includes(3) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>Q</DayItemText>
        </DayItem>

        <DayItem
          onPress={() => toogleWorkoutDay(4)}
          style={
            props.workoutDays.includes(4) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>Q</DayItemText>
        </DayItem>

        <DayItem
          onPress={() => toogleWorkoutDay(5)}
          style={
            props.workoutDays.includes(5) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>S</DayItemText>
        </DayItem>

        <DayItem
          onPress={() => toogleWorkoutDay(6)}
          style={
            props.workoutDays.includes(6) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>S</DayItemText>
        </DayItem>

        <DayItem
          onPress={() => toogleWorkoutDay(0)}
          style={
            props.workoutDays.includes(0) ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <DayItemText>D</DayItemText>
        </DayItem>
      </ListArea>

      <Label>Seu nível:</Label>
      <ListArea>
        <LevelItem
          onPress={() => props.setLevel('beginner')}
          style={props.level === 'beginner' ? {backgroundColor: '#a5e8bc'} : {}}
          underlayColor="transparent">
          <LevelItemText>Iniciante</LevelItemText>
        </LevelItem>

        <LevelItem
          onPress={() => props.setLevel('intermediated')}
          style={
            props.level === 'intermediated' ? {backgroundColor: '#a5e8bc'} : {}
          }
          underlayColor="transparent">
          <LevelItemText>Intermediário</LevelItemText>
        </LevelItem>

        <LevelItem
          onPress={() => props.setLevel('advanced')}
          style={props.level === 'advanced' ? {backgroundColor: '#a5e8bc'} : {}}
          underlayColor="transparent">
          <LevelItemText>Avançado</LevelItemText>
        </LevelItem>
      </ListArea>

      <Label>Você quer resetar tudo?</Label>
      <ResetButton title="Resetar Tudo" onPress={resetAction} />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: 'Configurações',
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
    level: state.userReducer.level,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
    reset: () => dispatch({type: 'RESET'}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
