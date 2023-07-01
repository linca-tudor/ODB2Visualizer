import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';

import {Sizing, Typography, Outlines, Colors, Buttons} from './styles';

const ExampleComponent = () => {
  return (
    <SafeAreaView style={Sizing.flex}>
      <View style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>React Native Typescript Styles</Text>
          <Text style={style.subheaderText}>
            Kick-start your React Native Typescript project with simple,
            organized styles.
          </Text>
        </View>
        <View style={style.bodyContainer}>
          <Text style={style.bodyText}>
            React Native has no framework for structuring styles, so we created
            this set of style modules for new React Native projects. While these
            styles are not visually opinionated, the organization of the style
            code is carefully considered.
          </Text>
        </View>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Buttons are Useful</Text>
        </Pressable>
        <Pressable style={Buttons.applyOpacity(style.button)}>
          <Text style={style.secondaryButtonText}>
            Not all buttons need a background
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: Sizing.x20,
  },
  headerContainer: {
    marginBottom: Sizing.x20,
    paddingBottom: Sizing.x20,
    borderBottomWidth: Outlines.borderWidth.hairline,
    borderColor: Colors.neutral.s200,
  },
  headerText: {
    ...Typography.bold.x40,
    marginBottom: Sizing.x10,
  },
  subheaderText: {
    ...Typography.semibold.x30,
  },
  bodyContainer: {
    marginBottom: Sizing.x20,
  },
  bodyText: {
    ...Typography.regular.x20,
    marginBottom: Sizing.x20,
  },
  button: {
    ...Buttons.bar.primary,
    marginBottom: Sizing.x10,
  },
  buttonText: {
    ...Buttons.barText.primary,
  },
  secondaryButton: {
    ...Buttons.bar.secondary,
  },
  secondaryButtonText: {
    ...Buttons.barText.secondary,
  },
});

export default ExampleComponent;
