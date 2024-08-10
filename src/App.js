import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import Watch from './components/Watch';

function App() {
 
 const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
         {
          path:"/",
          element:<VideoContainer/>
         },
         {
          path:"/watch",
          element:<Watch/>
         }
    ]
  }
 ])
 
  return (
   <Provider store={store}>
      <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
   </Provider>
  );
}

export default App;
