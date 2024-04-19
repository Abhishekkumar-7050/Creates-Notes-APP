
// import './App.css';
import CreateNotes from './components/CreateNotes';
import ListNotes from './components/ListNotes';
import Note from './components/Note';
import Write from './components/Write';
function App() {
  return (
    <div className="App">
       {/* <Write/>
       <Note/> */}
       <CreateNotes/>
       <ListNotes/>
    </div>
  );
}

export default App;
