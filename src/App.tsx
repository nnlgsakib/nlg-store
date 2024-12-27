import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { CartProvider } from './context/CartContext';
import theme from './theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
}