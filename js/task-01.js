const totalCategories = document.querySelectorAll('#categories .item');
console.log(`В списке ${totalCategories.length} категории.`);

const getEl = [...totalCategories]
.map(categories => 
    `Категория ${categories.firstElementChild.textContent}
   Количество элементов ${categories.lastElementChild.children.length}`
)

   .join('\n')


console.log(getEl);