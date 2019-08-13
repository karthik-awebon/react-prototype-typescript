import React from 'react';
import './App.css';

import TopNav from './components/TopNav/TopNav';
import MainWindow from './components/MainWindow/MainWindow';
import BottomNav from './components/BottomNav/BottomNav';

const App: React.FC = () => {
  return (
    <>
      <TopNav data-test="app__topnav" />
      <MainWindow data-test="app__mainwindow" />
      <BottomNav data-test="app__bottomnav" />
    </>
  );
};

export default App;
