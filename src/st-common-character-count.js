import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(/* s1, s2 */) {
  let filtered = [];

  if(Array.isArray(members)) {
    filtered = members.filter(function(m) {
      return (typeof(m) == 'string');
    })

   let secFilter = filtered.map(m => m.trim().slice(0,1)).sort().join('').toUpperCase();

   return secFilter.split('').sort().join('');
   
  }return false;
}
