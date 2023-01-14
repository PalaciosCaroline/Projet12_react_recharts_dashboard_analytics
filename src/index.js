import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<>
<GlobalStyle /> 
<App tab="home" />
</>
);



