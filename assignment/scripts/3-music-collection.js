console.log('***** Music Collection *****')

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
//- Create a new object having the above properties
//- Add the new object to the end of the `collection` array
//- Return the newly created object

let collection = [];
console.log(collection)

/**
 * 
 * @param {string} title 
 * @param {string} artist 
 * @param {number} yearPublished 
 */

function addToCollection(title, artist, yearPublished) {
    let newAlbum = {title, artist, yearPublished}
    collection.push(newAlbum)
    return newAlbum
}

    

addToCollection('R.A.M (Random Access Memories)', 'Daft Punk', 2013)

console.table(collection)