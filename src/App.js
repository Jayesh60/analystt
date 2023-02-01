import Navbarr from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Feed from "./components/Feed";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
         <Navbarr/>
        <Feed/>
        </>
        
      </header>
    </div>
  );
}

export default App;
