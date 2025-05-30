import React, { memo } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

import styles from './styles';

export const CommonLoader = memo(({ loading, isCoverFullScreen = true }: { loading: boolean; isCoverFullScreen?: boolean }) => {
  return isCoverFullScreen ? (
    <Modal transparent animationType='none' visible={loading}>
      <View style={[styles.modalBackground]}>
        <ActivityIndicator size='large' color='black' animating />
      </View>
    </Modal>
  ) : loading ? (
    <View style={styles.background}>
      <ActivityIndicator size='large' color='black' animating />
    </View>
  ) : null;
});
