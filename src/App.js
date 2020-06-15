import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { GlobalStyle, Container } from './styles';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <Topbar />
            <Sidebar />
          </Container>
          <Routes />
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
    </div>
  );
}

export default App;
