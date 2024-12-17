import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tehnolodgies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <span>i am component Header'</span>
    </div>
  )
}

const Tehnolodgies = () => {
  return (
    <div>
      <span>i am Tehnolodgies</span>
    </div>
  )
}
export default App;
