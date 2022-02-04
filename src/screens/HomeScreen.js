import React, {useState} from 'react';
import {ReactReduxContext, useStore} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = props => {
  const store = useStore(ReactReduxContext);

  const [value, setValue] = useState(0);
  const [fact, setFact] = useState('');
  store.subscribe(() => {
    setValue(store.getState().user.number);
    setFact(store.getState().user.fact);
  });
  return (
    <View style={styles.wrapper}>
      <Button
        title="Increment"
        onPress={() => store.dispatch({type: 'INCREMENT'})}
      />
      <Text style={styles.title}>{value}</Text>
      <Button
        title="Decrement"
        onPress={() => store.dispatch({type: 'DECREMENT'})}
      />
      <Button
        title="Generate fact"
        onPress={() => store.dispatch({type: 'GENERATE_FACT'})}
      />
      <Text style={styles.fact}>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 20,
  },
  wrapper: {
    margin: 10,
  },
  fact: {
    marginTop: 50,
    fontSize: 22,
    alignSelf: 'center',
  },
});

export default HomeScreen;
