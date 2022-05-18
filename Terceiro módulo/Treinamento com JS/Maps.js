function getAdmins(map) {
   let admins = [];
   for ([key, value] of map) {
       if (value === 'Admin') {
           admins.push(key);
       }       
   }
   return admins;
}
const usuarios = new Map();
usuarios.set('Luiz' ,'Admin');
usuarios.set('Fabrício' ,'Admin');
usuarios.set('Lucas' ,'Admin');
usuarios.set('Rafael' ,'Admin');
usuarios.set('Tereza' ,'cliente');
usuarios.set('Daivid' ,'cliente');

console.log(getAdmins(usuarios));