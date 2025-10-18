import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
      // }).start(() => animatedTop.setValue(-100)); //* forma 1 de resetear el valor
      // }).start(() => animatedTop.resetAnimation()); //* forma 2 ideal cuando hay varias animaciones, ejem: en x y
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      // easing: Easing.elastic(3),
      easing: easing,
    }).start(callback);
  };

  return {
    animatedTop,
    animatedOpacity,
    //*Métodos
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
