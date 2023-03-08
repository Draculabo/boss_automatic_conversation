import { useState } from 'react';
import TextRegion from './components/TextRegion/TextRegion';
import ConversationContainer from './components/ConversationContainer/ConversationContainer';
import { createPortal } from 'react-dom';
function App() {
  return <ConversationContainer />;
}

export default App;
