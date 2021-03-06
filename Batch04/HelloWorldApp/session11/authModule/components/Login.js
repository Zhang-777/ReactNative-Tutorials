import React, { Component } from 'react'
import { Text, View, TextInput, ActivityIndicator } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { loginAsync } from '../actions'
import store from '../../store';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: '123456789',
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (this.props.loginStatus !== prevProps.loginStatus) {
    //   console.log(this.props.loginStatus);
    // }
  }

  render() {
    return (
      <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
        {/* CONDITIONAL REDERING */}

        {/* <Text> Email </Text>
        <TextInput
          value={this.state.username}
          placeholder="Enter your username"
          keyboardType='default'
          underlineColorAndroid="#0984e3"
          returnKeyType="next"
          onChangeText={(text) => {
            this.setState({ username: text });
          }} /> */}
        <Input
          label="Email:"
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <Text> Paswword: </Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          placeholder="Enter your password"
          underlineColorAndroid="#0984e3"
          onChangeText={(text) => {
            this.setState({ password: text });
          }} />

        <View>
          <View style={{ height: 12 }}></View>
          <Button
            icon={<Icon name='rowing' color="white" />}
            iconRight={true}
            title="LOGIN"
            onPress={() => {
              //store.dispatch({ type: 'AUTH_REGISTER', username: '' });
              this.props.loginAsync(this.state.username, this.state.password);
            }} />
        </View>
        {
          (this.props.loading === true) && <ActivityIndicator />
        }
      </View>
    )
  }
}



// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  user: state.authReducer.user,
  loginStatus: state.authReducer.loginStatus,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  loginAsync: (username, password) => dispatch(loginAsync(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

