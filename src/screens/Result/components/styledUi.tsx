import styled from 'styled-components/native';
import {ButtonContinue} from 'src/components/button';
import {ContainerSafeView} from 'src/components/base-ui/Container';
import {View} from 'react-native';

const WrapButtonContinue = styled(View)`
  box-shadow: 0px 4px 7px rgba(105, 105, 105, 0.22);
`;
const WrapContainerSafeView = styled(ContainerSafeView)`
  align-items: center;
  flex: 1;
`;

export {WrapButtonContinue, WrapContainerSafeView};
