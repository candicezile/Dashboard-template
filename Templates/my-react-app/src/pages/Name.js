import { useState } from "react";
import { Link } from 'react-router-dom';


const Name = () => {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    const displayVariable = (e) => {
      e.preventDefault();
      const newNameList = [...nameList, name];
      setNameList(newNameList);
      localStorage.setItem('nameList', JSON.stringify(newNameList));
      setName('');
    };
  
    return (
      <div className="Form">
        <h1>Name</h1><br />
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <button type="submit" className='button3' onClick={displayVariable}>Add</button>

        <main>
        <nav>
          <ul>
          <button className='button4'>
          <Link to="/username">UserName</Link><br></br>

          </button>

          </ul>
        </nav>
      </main>
      </div>


    );
  };

export default Name;