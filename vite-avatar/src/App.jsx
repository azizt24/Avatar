import './App.css';
import Create from './components/Create';
import Read from './components/Read';

function App() {
  return (
    <main>
      <Header />
      <CreateSection />
      <ReadSection />
    </main>
  );
}
function Header() {
  return <h1>Avatars CRUD mock API</h1>;
}
function CreateSection() {
  return <Create />;
}

function ReadSection() {
  return <Read />;
}

export default App;
