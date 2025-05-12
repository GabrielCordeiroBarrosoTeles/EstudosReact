import './App.css';
//2 - importando o componente
import FirstComponent from './components/FirstComponent';

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent';

// 6 - eventos
import Events from './components/Events';

function App() {
  // 3 - comentário
  return (
    <div>
      {/* 3 - comentário JSX  */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />   
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App
