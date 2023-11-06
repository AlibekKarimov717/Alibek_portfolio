import './style/style';

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Index from './layout/main/index'


function App() {

  return (  
    <div className="wrapper">
      <Header/>
      <Index/>
      <Footer/>
    </div>
  )
}

export default App

