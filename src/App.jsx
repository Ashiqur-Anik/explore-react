import './App.css'
import Counter from './counter';
import Users from './users';
import Friends from './friendes';


function App() {




  return (
    <>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>

      <h1>React code concepts</h1>
      <button onClick={button1}>Click btn 1</button>
      <button onClick={() => { alert('hello Mister anik') }}>Click btn 2</button>
      <button onClick={button3}>click btn 3</button>

    </>
  )
}


function button1() {
  alert('hello ashiqur rahman');
}
const button3 = () => {
  alert('hello Anik, you can do this ')
}




export default App
