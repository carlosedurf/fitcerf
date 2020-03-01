import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

const Preload = props => {
  props.navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StartedStack'})],
    }),
  );

  if (!props.name) {
    // mandar para StartedStack
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StartedStack'})],
      }),
    );
  } else {
    // mandar para AppTab
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  }

  return null;
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

export default connect(mapStateToProps)(Preload);
