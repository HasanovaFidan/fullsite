
import React from 'react';

function Search({ table, setTable, original }) {
  const handleChange = (e) => {
    let search = e.target.value.trim().toLowerCase();
    console.log(search);

    if (search === "") {
      setTable(original);
      console.log("salam");
    } else {
      let searchedCards = table.filter((item) =>
        item.name.trim().toLowerCase().includes(search)
      );
      setTable(searchedCards);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    let sorted = table.sort((a, b) => a.unitPrice - b.unitPrice);
    setTable([...sorted]);
  };

  return (
    <div>
      <form className='axtar' action=''>
        <input
          type='text'
          placeholder='search product'
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleClick(e)}>Sort</button>
      </form>
    </div>
  );
}

export default Search;
