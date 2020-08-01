import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'



function App() {
  return (
    <div className="App">
      <Button className="custom">Hello</Button>
      <Button disabled>disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
    </div>
  );
}

export default App;
