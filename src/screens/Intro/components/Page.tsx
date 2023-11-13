import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonPrimary, Text} from 'src/components';
import {useLayout} from 'src/hooks';

import {IPage} from 'src/constants/types';

interface Props {
  item: IPage;
  onPress?(): void;
}

const Page = React.memo(({item, onPress}: Props) => {
  const {width, bottom} = useLayout();
  const {image, title, description, button} = item;

  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.content}>{image}</View>
      <View style={{flex: 1}}>
        <Text category="h-24" marginHorizontal={24} marginBottom={24} center>
          {title}
        </Text>
        <Text status="body" marginHorizontal={24} category="h-16" center>
          {description}
        </Text>
        <View style={{flex: 1}} />
        <ButtonPrimary
          style={[
            styles.button,
            {
              marginBottom: bottom + 8,
            },
          ]}
          onPress={onPress}
          title={button}
        />
      </View>
    </View>
  );
});

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    marginTop: 16,
  },
});
