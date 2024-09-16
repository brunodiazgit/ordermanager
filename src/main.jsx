import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ButtonProvider from './context/ButtonProvider.jsx'
import FormProvider from './context/FormProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormProvider>
      <ButtonProvider>
        <App />
      </ButtonProvider>
    </FormProvider>
  </StrictMode>,
)
