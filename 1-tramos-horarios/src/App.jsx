import React from 'react';
import TopBar from './components/topBar';
import AvailableMotorciclesGrid from './components/motorcycles/availableMotorciclesGrid';

function Layout({ children }) {
  return (
    <div style={{
      padding: '50px 25px 25px 25px'
    }}>
      {children}
    </div>
  );
}

function Title() {
  return (
    <h1>Selección de motocicleta</h1>
  );
}

export default function App() {
  return (
    <>
      <TopBar />
      <Layout>
        <Title />
        <AvailableMotorciclesGrid />
      </Layout>
    </>
  );
}
