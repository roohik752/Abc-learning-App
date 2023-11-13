// import React, {memo} from 'react';
// import Container, {ContainerSafeView} from 'src/components/base-ui/Container';
// import HeaderApp from 'src/components/base-ui/HeaderApp';
// import ContainerImage from 'src/components/base-ui/ContainerImage';
// import {ScrollView} from 'react-native';
// import DefaultNumbers from 'src/data/numbers';
// import RowItem from 'src/screens/LearnNumber/components/RowItem';
// import {useTranslation} from 'react-i18next';

// const LearnNumber = memo(() => {
//   const {t} = useTranslation();
  
//   return (
//     <Container>
//       <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//         <ContainerImage source={require('src/assets/BG_Alphabet.png')} />
//         <ContainerSafeView>
//           <HeaderApp title={t('the_numbers')} />
//           {DefaultNumbers.map((item, index) => {
//             return <RowItem data={item} key={index} />;
//           })}
//         </ContainerSafeView>
//       </ScrollView>
//     </Container>
//   );
// });

// export default LearnNumber;


import React, { memo } from 'react';
import Container, { ContainerSafeView } from 'src/components/base-ui/Container';
import HeaderApp from 'src/components/base-ui/HeaderApp';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import { ScrollView } from 'react-native';
import DefaultNumbers, { BengaliNumbers, GujratiNumbers, HindiNumbers, KannadaNumbers, MarathiNumbers, TamilNumbers, TeluguNumbers, UrduNumbers } from 'src/data/numbers';
import RowItem from 'src/screens/LearnNumber/components/RowItem';
import { useTranslation } from 'react-i18next';

const LearnNumber = memo(() => {
  const { t, i18n } = useTranslation();

  // Determine the language and set the appropriate numbers array
  let numbersArray = [];
  if (i18n.language === 'en') {
    numbersArray = DefaultNumbers;
  } else if (i18n.language === 'ben') {
    numbersArray = BengaliNumbers;
  } else if (i18n.language === 'guj') {
    numbersArray = GujratiNumbers;
  } else if (i18n.language === 'hi') {
    numbersArray = HindiNumbers;
  } else if (i18n.language === 'kan') {
    numbersArray = KannadaNumbers; 
  } else if (i18n.language === 'ma') {
    numbersArray = MarathiNumbers;
  } else if (i18n.language === 'ta') {
    numbersArray = TamilNumbers;
  } else if (i18n.language === 'tel') {
    numbersArray = TeluguNumbers;
  } else if (i18n.language === 'ur') {
    numbersArray = UrduNumbers;
  } 

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <ContainerImage source={require('src/assets/BG_Alphabet.png')} />
        <ContainerSafeView>
          <HeaderApp title={t('the_numbers')} />
          {numbersArray.map((item, index) => {
            return <RowItem data={item} key={index} />;
          })}
        </ContainerSafeView>
      </ScrollView>
    </Container>
  );
});

export default LearnNumber;
