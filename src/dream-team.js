import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  let filtered = [];

  if(Array.isArray(members)) {
    filtered = members.filter(function(m) {
      return (typeof(m) == 'string');
    })

   let secFilter = filtered.map(m => m.trim().slice(0,1)).sort().join('').toUpperCase();

   return secFilter.split('').sort().join('');
   
  }return false;
}
