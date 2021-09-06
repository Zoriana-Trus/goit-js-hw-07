const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  const listEl = document.querySelector('#ingredients');
  console.log(listEl);

  
  

  const ingredientsEl = ingredients => {
    return ingredients.map(ingredient => {
    const itemsEl = document.createElement("li");
    itemsEl.textContent = ingredient;
    return itemsEl;
  });
};

  const items = ingredientsEl(ingredients);
  listEl.append(...items);
  console.log (items);
  

  // const listEl = document.querySelector('#ingredients');
  // console.log(listEl);




  // const listItemsEl = ingredients => {
  //   return ingredients.map(ingredient => {
  //   const listItemEl = document.createElement('li');
  //   listItemEl.innerHTML = ingredient ;
  //   return listItemEl;
  //   });
  // };

  // const items = listItemsEl (ingredients);
  // listEl.append(...items);
  // console.log (items);

  //   const ingredientsEl = ingredients => {
  //     return ingredients.map(ingredient => {
  //     const itemsEl = document.createElement("li");
  //     itemsEl.innerHTML = ingredient;
  //     return itemsEl;
  //   });
  // };
  
 

  