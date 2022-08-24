import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, NewClient, EditClient, ViewClient } from './pages';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/new-client' element={<NewClient/>}/>
            <Route path='/edit/:id' element={<EditClient/>}/>
            <Route path='/:id' element={<ViewClient/>}/>
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
