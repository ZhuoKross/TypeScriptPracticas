import LogisticComponent from "./components/factoryMethod/LogisticComponent";
import MainComponent from "./components/AbstractFactory/MainComponent";



function App() {
  return (
    <div className="w-full h-screen">
      <h1 className="text-3xl text-center pt-10">Hello, this is an example of factory method pattern</h1>
      
      <LogisticComponent></LogisticComponent>

      <MainComponent></MainComponent>
    </div>
  );
}

export default App;
