import Container from 'react-bootstrap/Container';
import Header from './componet/Header';
import Products from './Componet/Products';
import {BrowserRouter } from 'react-router-dom';
import MisRoutes from './pages/MisRutas';


function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header/>
        <Products/>
        <MisRoutes/>
      </BrowserRouter>
    </Container>
  );
}



export default App;