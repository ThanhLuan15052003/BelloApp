import React from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import content from '../../lang/content.json';
import styles from '../../styles/onboarding/OnboardingNoCheckScreen';
import useOnboardNoCheck from '../../hooks/useOnBoardNoCheck';
const OnboardingNoCheckScreen = () => {
  const {isChecked, setIsChecked, handleConfirm} = useOnboardNoCheck();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../.././../assets/image/Logo.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>{content.terms.termsOfUse}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>{content.terms.salesConditions}</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>{content.terms.privacyPolicy}</Text>
        </Pressable>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[
            styles.customCheckbox,
            isChecked && styles.customCheckboxChecked,
          ]}
          onPress={() => setIsChecked(!isChecked)}>
          {isChecked && (
            <Image source={require('../.././../assets/image/Union.png')} />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>{content.messages.acceptTerms}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../.././../assets/image/arrow-turn-left.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.confirmButton,
            isChecked
              ? styles.confirmButtonEnabled
              : styles.confirmButtonDisabled,
          ]}
          onPress={handleConfirm}
          disabled={!isChecked}>
          <Text
            style={[
              styles.confirmText,
              isChecked
                ? styles.confirmTextEnabled
                : styles.confirmTextDisabled,
            ]}>
            {content.buttons.confirm}
          </Text>
          <Image source={require('../.././../assets/image/arrow-right.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnboardingNoCheckScreen;
