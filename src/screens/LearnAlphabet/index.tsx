// import React, {memo} from 'react';
// import Container, {ContainerSafeView} from 'src/components/base-ui/Container';
// import HeaderApp from 'src/components/base-ui/HeaderApp';
// import ContainerImage from 'src/components/base-ui/ContainerImage';
// import {ScrollView} from 'react-native';
// import DefaultAlphabet from 'src/data/alphabets';
// import RowItem from 'src/screens/LearnAlphabet/components/RowItem';
// import {useTranslation} from 'react-i18next';

// const LearnAlphabet = memo(() => {
//   const {t} = useTranslation('common');
//   return (
//     <Container>
//       <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//         <ContainerImage source={require('src/assets/BG_Alphabet.png')} />
//         <ContainerSafeView>
//           <HeaderApp title={t('the_alphabet')} />
//           {DefaultAlphabet.map((item, index) => {
//             return <RowItem data={item} key={index} />;
//           })}
//         </ContainerSafeView>
//       </ScrollView>
//     </Container>
//   );
// });

// export default LearnAlphabet;


import React, { memo } from 'react';
import Container, { ContainerSafeView } from 'src/components/base-ui/Container';
import HeaderApp from 'src/components/base-ui/HeaderApp';
import ContainerImage from 'src/components/base-ui/ContainerImage';
import { ScrollView } from 'react-native';
import DefaultAlphabet, { TeluguAlphabet, UrduAlphabet } from 'src/data/alphabets';
import { HindiAlphabet } from 'src/data/alphabets';
import { KannadaAlphabet } from 'src/data/alphabets';
import { TamilAlphabet } from 'src/data/alphabets';
import {GujratiAlphabet} from 'src/data/alphabets';
import {BengaliAlphabet} from 'src/data/alphabets';
import {MarathiAlphabet} from 'src/data/alphabets';
import RowItem from 'src/screens/LearnAlphabet/components/RowItem';
import { useTranslation } from 'react-i18next';

const LearnAlphabet = memo(() => {
  const { t, i18n } = useTranslation('common');

  // Determine the selected alphabet based on the language
  //const selectedAlphabet = i18n.language === 'hi' ? HindiAlphabet : DefaultAlphabet;

  let selectedAlphabet = DefaultAlphabet; // Default to English

   if (i18n.language === 'en') {
    selectedAlphabet = DefaultAlphabet;
  } else if (i18n.language === 'ben') {
    selectedAlphabet = BengaliAlphabet;
  } else if (i18n.language === 'guj') {
    selectedAlphabet = GujratiAlphabet;
  } else if (i18n.language === 'hi') {
    selectedAlphabet = HindiAlphabet;
  } else if (i18n.language === 'kan') {
    selectedAlphabet = KannadaAlphabet;
  } else if (i18n.language === 'ma') {
    selectedAlphabet = MarathiAlphabet;
  } else if (i18n.language === 'ta') {
    selectedAlphabet = TamilAlphabet;
  } else if (i18n.language === 'tel') {
    selectedAlphabet = TeluguAlphabet;
  } else if (i18n.language === 'ur') {
    selectedAlphabet = UrduAlphabet;
  } 


  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <ContainerImage source={require('src/assets/BG_Alphabet.png')} />
        <ContainerSafeView>
          <HeaderApp title={t('the_alphabet')} />
          {selectedAlphabet.map((item, index) => {
            return <RowItem data={item} key={index} />;
          })}
        </ContainerSafeView>
      </ScrollView>
    </Container>
  );
});

export default LearnAlphabet;




