import './App.css';
import Header from './Components/Navbar/Header';

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className="App">
      <Header navbarLinks={navbarLinks}/>
      
    </div>
  );
}

export default App;
