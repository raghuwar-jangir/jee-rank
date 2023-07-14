import logo from './logo.svg';
import './App.css';
import { rank, alpha, add } from './store';
import { useState } from 'react';

function App(props) {
  const { state, dispatch } = props;

  const [name, setName] = useState('');
  const [P, setP] = useState(null);
  const [C, setC] = useState(null);
  const [M, setM] = useState(null);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(add(name, P, C, M));

    setName("");
    setP("");
    setC("");
    setM("");

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1> Ranking System</h1>
        <div className="row">

          <div className="column-1">
            <div className='add'>

              <h2 id="header">Add student</h2>

              <form onSubmit={formHandler}>
                <label for="name">Name</label>
                <input
                  type="text"
                  placeholder='Enter name'
                  max={120}
                  value={name}
                  required
                  onChange={(e) => { setName(e.target.value) }}
                />
                <br />

                <label for="marks">Physics</label>
                <input
                  type="number"
                  placeholder='Enter marks'
                  max={120}
                  required
                  value={P}
                  onChange={(e) => { setP(e.target.value) }}
                />

                <label for="marks">Chemistry</label>
                <input
                  type="number"
                  placeholder='Enter marks'
                  max={120}
                  required
                  value={C}
                  onChange={(e) => { setC(e.target.value) }}
                />

                <label for="marks">Maths</label>
                <input
                  type="number"
                  placeholder='Enter marks'
                  max={300}
                  required
                  value={M}
                  onChange={(e) => { setM(e.target.value) }}
                />
                <br />
                <input type='submit' value="Add" />
              </form>

            </div>





          </div>


          <div className="column-2">
            <div className='rank'>
              <h2 id="header">Rank</h2>
              <button className="rank-btn" onClick={() => dispatch(rank())}>rank</button>
              <button className="alphs-btn" onClick={() => dispatch(alpha())}>alpha</button>
              <div className='list'>
                <ol>
                  {state.map(student => {
                    const P = student.score.P;
                    const C = student.score.C;
                    const M = student.score.M;
                    return (
                      <div>
                        <li>{student.name} : {P + C + M}</li>
                        <span>P : {P}  &nbsp;  &nbsp;  &nbsp;  C : {C}  &nbsp;  &nbsp;   &nbsp;   M : {M} </span>

                      </div>
                    )
                  })}
                </ol>
              </div>
            </div>
          </div>

        </div>
      </header >
    </div >
  );
}

export default App;
