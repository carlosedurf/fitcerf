import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

import HomeMonthScroll from '../components/HomeMonthScroll';
import HomeDaysScroll from '../components/HomeDaysScroll';
import HomeDaysStatus from '../components/HomeDaysStatus';

const Container = styled.SafeAreaView`
  align-items: center;
`;
const Legend = styled.View`
  width: 90%;
  align-items: flex-start;
  margin-top: 30px;
`;
const LegendText = styled.Text`
  color: #555;
`;
const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
const LegendBox = styled.View`
  width: 15px;
  height: 15px;
  background-color: #ccc;
  margin-right: 5px;
`;

const Page = props => {
  return (
    <Container>
      <HomeMonthScroll />
      <HomeDaysScroll />
      <HomeDaysStatus />

      <Legend>
        <LegendText>Legenda: </LegendText>

        <LegendItem>
          <LegendBox style={{backgroundColor: '#B5EEFF'}} />
          <LegendText>Hoje</LegendText>
        </LegendItem>

        <LegendItem>
          <LegendBox style={{backgroundColor: '#B5FFB8'}} />
          <LegendText>Treino Perdido</LegendText>
        </LegendItem>

        <LegendItem>
          <LegendBox style={{backgroundColor: '#FFB5B5'}} />
          <LegendText>Treino Perdido</LegendText>
        </LegendItem>

        <LegendItem>
          <LegendBox style={{backgroundColor: '#F4F4F4', opacity: 0.2}} />
          <LegendText>Dia de descanso</LegendText>
        </LegendItem>

        <LegendItem>
          <LegendBox style={{backgroundColor: '#F4F4F4'}} />
          <LegendText>Dia futuro</LegendText>
        </LegendItem>
      </Legend>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const ConfigButtonArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;

  const ConfigButtonImage = styled.Image`
    width: 25px;
    height: 25px;
  `;

  const ConfigButton = () => {
    const btnAction = () => {
      navigation.navigate('HomeConfig');
    };

    return (
      <ConfigButtonArea onPress={btnAction}>
        <ConfigButtonImage source={require('../assets/config.png')} />
      </ConfigButtonArea>
    );
  };

  return {
    title: 'Seu Progresso diário',
    headerRight: <ConfigButton />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
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
