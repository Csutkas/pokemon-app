import React, { memo, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonVariant } from '../common-interfaces';
import { styles } from './styles';

interface CommonButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}

export const CommonButton = memo(({ label, onPress, disabled = false, variant = 'primary' }: CommonButtonProps) => {
  const styleMemo = useMemo(() => styles({ disabled }), [disabled]);

  const variantStyle = useMemo(() => {
    switch (variant) {
      case 'text':
        return styleMemo.textButtonStyle;
      case 'secondary':
        return styleMemo.secondaryButtonStyle;
      default:
        return styleMemo.primaryButtonStyle;
    }
  }, [variant, styleMemo]);

  return (
    <TouchableOpacity onPress={onPress} style={[styleMemo.button, variantStyle]} disabled={disabled}>
      <Text style={[styleMemo.label, variant === 'text' && styleMemo.textButtonLabelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
});
