
import './App.css';
import MyApp from './components/CurrentUserInfo';
import CharacterCounter from './components/CharacterCounter';
import FontButton from './components/FontButton';
import Text from './components/Text'
import TodoList from './components/todo/TodoList';
function App() {
  return (
    <>
  <FontButton/>
  <Text />
  <CharacterCounter/>
  <TodoList/>
  <MyApp/>
  </>
  );
}

export default App;
