import React, { memo, useMemo } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import { CommonSpacer } from '../common-spacer/common-spacer';

export interface CommonTextInputProps extends TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  errorText?: string;
  placeholderColor?: string;
}

export const CommonTextInput = memo(({ value, disabled, placeholder, isError, errorText, ...restProps }: CommonTextInputProps) => {
  const styleMemo = useMemo(
    () =>
      styles({
        $disabled: disabled,
        $isError: isError,
      }),
    [disabled, isError]
  );
  return (
    <View>
      <TextInput value={value} placeholder={placeholder} style={styleMemo.input} editable={!disabled} {...restProps} />
      {isError && (
        <View>
          <CommonSpacer />
          <Text style={styleMemo.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
});
