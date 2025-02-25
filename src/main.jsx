
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <UserProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </UserProvider>
    </BrowserRouter>
)
