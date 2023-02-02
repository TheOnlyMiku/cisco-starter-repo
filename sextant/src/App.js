
import './App.css';
import Banner from './Banner';
import Exhibits from './Exhibits';


function App() {
  
  return (
    <div className="App">
      <Banner 
      banner = "Sextant" 
      />
       
     <Exhibits 
     heading= "Exhibit 1"
     children= "Child 1"
     />
      <Exhibits 
     heading="Exhibit 2"
     children="Child 2"
     />
      <Exhibits 
     heading="Exhibit 3"
     children="Child 3"
     />
    </div>
  );
}

export default App;
