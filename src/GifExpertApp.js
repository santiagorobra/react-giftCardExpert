import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      {/* <button onClick={handleAdd} >Agregar</button> */}
      <ol>
        {
          categories.map(categorie => <GifGrid category={categorie} key={categorie}/>)
        }
      </ol>
    </>
  );
};

export default GifExpertApp;