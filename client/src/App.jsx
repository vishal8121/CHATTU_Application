/* rafce shortcuts for the react arrow function
*/
import {React, lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

// lazy function for dynamic import pages
const Home = lazy(()=> import('../pages/Home'));
const Login = lazy(()=> import('../pages/Login'));
const Chat = lazy(()=> import('../pages/Chat'));
const Groups = lazy(()=> import('../pages/Groups'));


const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={< Home />} />
    <Route path='/chat/:chatId' element={< Chat />} />
    <Route path='/' element={< Groups />} />
    <Route path='/login' element={< Login />} />
  </Routes>
  
  </BrowserRouter>
}

export default App