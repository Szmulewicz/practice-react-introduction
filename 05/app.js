import React from 'react';
import Nav from './components/Nav';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

root.render(<Nav />)