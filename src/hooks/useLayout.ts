import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const useLayout = () => {
  const {width, height} = useSafeAreaFrame();
  const {bottom, top} = useSafeAreaInsets();
  return {width, height, top, bottom};
};

export default useLayout;
