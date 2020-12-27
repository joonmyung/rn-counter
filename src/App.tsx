import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <Container>
      <Counter title="또 하나의 카운터 앱" initValue={5} />
    </Container>
  );
};
export default App;