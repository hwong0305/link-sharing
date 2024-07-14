import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [activeTab, setTab] = useState('link');
  return (
    <>
      <Navbar activeTab={activeTab} setTab={setTab} />
    </>
  );
}

export default App;
