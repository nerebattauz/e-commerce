
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'


createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <Navbar />
    <App />
    <Footer />
    </ChakraProvider>
)
