console.log('***** Music Collection *****')

//- Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
//- Create a new object having the above properties
//- Add the new object to the end of the `collection` array
//- Return the newly created object

let collection = [];


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

//- Test the `addToCollection` function:
//- Add 6 albums to your collection. Aim to have a mix of both same and 
//different artists and published years. 
//(Feel free to share your musical interests, or make stuff up. 
//Totally fine either way.)
//- Console.log each album as added using the returned value.
//- After all are added, console.log the `collection` array.   

console.log(addToCollection('R.A.M (Random Access Memories)', 'Daft Punk', 2013));
console.log(addToCollection('In Rainbows', 'Radiohead', 2007));
console.log(addToCollection('Demon Days', 'Gorillaz', 2005));
console.log(addToCollection('Aquemini', 'Outkast', 1998));
console.log(addToCollection('ForEver', 'Jungle', 2018));
console.log(addToCollection('DAMN', 'Kendrick Lamar', 2017));
console.log(addToCollection('good kid, m.A.A.d city', 'Kendrick Lamar', 2012));
console.table(collection);

//Add a function named `showCollection`. This function should:
//Take in an array parameter. (This allows it to be reused to show any collection, 
//like the results from the find or search.)
//Console.log the number of items in the array.
//Loop over the array and console.log each album's information formatted like:
// `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
    console.log(`Number of albums in collection: ${array.length}`);
    for (let album of array) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  };
console.log(showCollection(collection));