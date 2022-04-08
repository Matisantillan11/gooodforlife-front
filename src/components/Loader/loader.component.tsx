import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color="rgba(146, 198, 78, 0.76)" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
