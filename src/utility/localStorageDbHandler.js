const getListFromLSDb = (btn) => {
  const stringItemListFromLSDb = localStorage.getItem(btn);
  console.log(stringItemListFromLSDb);

  if (stringItemListFromLSDb) {
    // parse to js object
    const ItemListFromLSDb = JSON.parse(stringItemListFromLSDb);
    return ItemListFromLSDb;
  } else {
    return [];
  }
};

const addToLSDb = (id,btn) => {
  const itemFromLS = getListFromLSDb(btn);
  if (itemFromLS.includes(id)) {
    console.log(`Oops! already in the read list, can't add more than once`);
  } else {
    itemFromLS.push(id);
    const updatedLSItemList=JSON.stringify(itemFromLS);
    localStorage.setItem(btn,updatedLSItemList);
  }
};

export {addToLSDb};
