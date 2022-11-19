//IIFE => Immediately Invoked Function Expression
console.log('IIFE');
(function(){
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})();