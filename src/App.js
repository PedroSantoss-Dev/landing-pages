import './App.css';
import Header from './Components/Navbar/Header';
import Slider from './Components/Slider/Slider';


function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className="App">
      <Header navbarLinks={navbarLinks}/>
      
      

                   <Slider
                    imageSrc={"https://www.minasgerais.com.br/imagens/destinos/1578315263xjVvRVGS33.jpg"}
                    title={"Serro MG"}
                    subtitle={
                      "Serro é rodeada por montanhas e não faltam boas opções para caminhar, descansar e contemplar a natureza. O queijo que se produz por lá se tornou patrimônio imaterial de Minas Gerais"
                    }
                  />
                  <Slider
                    imageSrc={"https://minasgerais.com.br/imagens/destinos/1494333834aqtqEcA4d3.jpg"}
                    title={"Lagoa da pampulha"}
                    subtitle={"Declarado recentemente pela UNESCO como Patrimônio Cultural da Humanidade, o Conjunto Arquitetônico da Pampulha é a grande atração de Belo Horizonte. "}
                    flipped={true}
                  />
                     
              
                
      
    </div>
  );
}

export default App;
