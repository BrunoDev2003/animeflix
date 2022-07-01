import './App.css';
import Row from './components/row';
import categories from './api'
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
    {/* Navbar*/}
    {/* Destaque*/}
    {/* Em alta*/}
    {/* filmes de cada categoria*/}
    <Banner/>
    {categories.map((category) => {
      return (
      <Row 
        key={ category.name} 
        title={category.title} 
        path={category.path}
        isLarge={category.isLarge}
        />
      );
    })}
    <Row/>
    </div>
  );
}

export default App;
