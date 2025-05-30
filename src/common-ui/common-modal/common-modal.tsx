import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { CommonButton } from '../common-button/common-button';
import { CommonSpacer } from '../common-spacer/common-spacer';

interface CommonModalProps {
  showModal: boolean;
  setShowModal: (isOpen: boolean) => void;
  onButtonClick: () => void;
  label: string;
}
export const CommonModal = ({ showModal, setShowModal, onButtonClick, label }: CommonModalProps) => {
  return (
    <Modal visible={showModal} animationType='fade'>
      <View style={styles.container}>
        <TouchableOpacity style={styles.containerBackground} onPress={() => setShowModal(false)} activeOpacity={0} />
        <View style={styles.innerContainer}>
          <Text style={styles.label}>{label}</Text>
          <CommonSpacer multiplier={6} />
          <CommonButton variant='primary' label='Yes' onPress={onButtonClick} />
        </View>
      </View>
    </Modal>
  );
};
