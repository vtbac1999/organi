
import './App.css';
import {routes} from './routes'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DefautLayout from './components/layout';
import {Fragment} from 'react'
function App() {
  return (
    <>
   <Router>
    <Routes>
      {routes.map((route,index)=>{
        const Layout = route.layout === null ? Fragment : DefautLayout
        const Page = route.component
        return(
          <Route key={index} path={route.path} element={
          <Layout>
            <Page/>
          </Layout>} 
          /> 
        )}
          ) 
          }
    </Routes>
    </Router>
    </>
  );
}

export default App;
