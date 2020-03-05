import React, {useState} from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Page = props => {
  const editWorkout = workout => {
    props.navigation.navigate('EditWorkout', {workout});
  };

  return <Container />;
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: 'Editar Treino',
  };
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
