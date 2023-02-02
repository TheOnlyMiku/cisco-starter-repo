
import './App.css';
import Banner from './Banner';
import Exhibits from './Exhibits';


function App() {
  let heading = "Highlights"
  let children = "My Highlights"
  return (
    <div className="App">
      <Banner />
       
     <Exhibits 
     heading={heading}
     children={children}
     />
      <Exhibits 
     heading={heading}
     children={children}
     />
      <Exhibits 
     heading={heading}
     children={children}
     />
    </div>
  );
}

export default App;
