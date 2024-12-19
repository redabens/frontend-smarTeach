import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from './views/Layout';
import NotFound from './views/NotFound';
// import LoginPage from './views/LoginPage';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/" element={<Layout/>} >
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

