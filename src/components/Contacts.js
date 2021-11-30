import contact from "../contacts.json";
import { useState } from "react";

function Contacts() {
  const [allContacts, setContact] = useState(contact.slice(0, 5));

  function handleAdd() {
    let randomElem = contact[Math.floor(Math.random() * contact.length)];
    let newArr = [randomElem, ...allContacts];

    if (allContacts.includes(randomElem)) {
      console.log("Already filteredCelebrities");
    } else {
      setContact(newArr);
    }
  }

  function handleName() {
    let clone = JSON.parse(JSON.stringify(allContacts));
    clone.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });

    setContact(clone);
  }

  function handlePopularity() {
    let clone = JSON.parse(JSON.stringify(allContacts));
    clone.sort((first, second) => {
      if (first.popularity > second.popularity) {
        return -1;
      } else if (first.popularity < second.popularity) {
        return 1;
      } else {
        return 0;
      }
    });

    setContact(clone);
  }

  function handleDelete(id) {
    console.log("coucou");
    let filteredContacts = allContacts.filter((elem) => {
      return elem.id !== id;
    });
    setContact(filteredContacts);
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleName}>Sort by Name</button>
      <button onClick={handlePopularity}>Sort by Popularity</button>

      <ul>
        {allContacts.map((elem, index) => {
          return (
            <li key={`${elem.id}${index}`}>
              <img src={elem.pictureUrl} alt="" />
              {elem.name} -{elem.wonOscar && "Oscar: 🏆"}
              {elem.wonEmmy && "Emmy: 🏆"}
              popularity= {elem.popularity.toFixed(2)}
              <button
                onClick={() => {
                  handleDelete(elem.id);
                }}
              >
                DELETE !
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contacts;
