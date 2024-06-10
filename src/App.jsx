import React, { Suspense, lazy, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';
import axios from "axios";
import { server } from './constants/config';
import {useDispatch, useSelector} from "react-redux"
import { authSelector, userExists, userNotExists } from './redux/reducer/auth';
import { Toaster} from "react-hot-toast"; 
import { SocketProvider } from './socket';

const Home = lazy(()=> import("./pages/Home"));
const Login = lazy(()=> import("./pages/Login"));
const Groups = lazy(()=> import("./pages/Groups"));
const Chat = lazy(()=> import("./pages/Chat"));
const NotFound = lazy(()=> import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/AdminLogin/AdminLogin"))
const Dashboard = lazy(() => import("./pages/AdminLogin/Dashboard"))
const UserManagement = lazy(() => import("./pages/AdminLogin/UserManagement"))
const MessageManagement = lazy(() => import("./pages/AdminLogin/MessageManagement"))
const ChatManagement = lazy(() => import("./pages/AdminLogin/ChatManagement"))




let user = true;

const App = () => {
  const {user, loader} = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
   
    axios.get(`${server}/api/v1/users/me`, {withCredentials: true})
    .then(({data}) => dispatch(userExists(data.user)))
    .catch((err) => dispatch(userNotExists()));
  }, [dispatch])

  return loader ? (
    <LayoutLoader />
  ) : (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<SocketProvider>
                           <ProtectRoute user={user}/>
                       </SocketProvider>}>
          <Route path="/" element={<Home />}/>
          <Route path="/chat/:chatId" element={<Chat />}/>
          <Route path="/groups" element={<Groups />}/>
        </Route>

        <Route path="/login" element={
          <ProtectRoute user={!user} redirect='/'>
              <Login />
          </ProtectRoute>
        }/>

        <Route path='/admin' element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<Dashboard />}/>

        <Route path='/admin/users' element={<UserManagement />}/>
        <Route path='/admin/chats' element={<ChatManagement />}/>
        <Route path='/admin/messages' element={<MessageManagement />}/>


        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Suspense>  

    <Toaster position='bottom-center'/>  
    </BrowserRouter>
  )
}

export default App;