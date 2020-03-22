import React from 'react';
import styled from 'styled-components/native';
import {SwipeRow} from 'react-native-swipe-list-view';

import useMuscleImage from './useMuscleImage';

const ExerciseItemArea = styled.TouchableHighlight`
  height: 50px;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ExerciseMuscleArea = styled.View`
  width: 50px;
  height: 50px;
  background-color: #ffcc98;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ExerciseMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

const ExerciseInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

const ExerciseName = styled.Text`
  font-size: 15px;
  color: #000;
`;
const ExerciseDetails = styled.Text`
  font-size: 12px;
  color: #999;
`;

const ExerciseSwipe = styled.TouchableHighlight`
  height: 50px;
  background-color: #f00;
  justify-content: center;
`;

const ExerciseSwipeIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;

export default props => {
  return (
    <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>
      <ExerciseSwipe onPress={props.delAction} underlayColor="#f00">
        <ExerciseSwipeIcon source={require('../assets/trash-white.png')} />
      </ExerciseSwipe>

      <ExerciseItemArea onPress={props.editAction} underlayColor="#fff">
        <>
          <ExerciseMuscleArea>
            <ExerciseMuscleImage source={useMuscleImage(props.data.muscle)} />
          </ExerciseMuscleArea>

          <ExerciseInfo>
            <ExerciseName>{props.data.name}</ExerciseName>
            <ExerciseDetails>
              {`${props.data.sets} séries - ${props.data.reps} rep ${
                props.data.load ? `- ${props.data.load} kg` : ''
              }`}
            </ExerciseDetails>
          </ExerciseInfo>
        </>
      </ExerciseItemArea>
    </SwipeRow>
  );
};
