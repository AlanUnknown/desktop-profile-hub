import { useState } from 'react';
import Desktop from '@/components/Desktop';
import LoginScreen from '@/components/LoginScreen';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Desktop onLogOff={() => setIsLoggedIn(false)} />;
};

export default Index;
