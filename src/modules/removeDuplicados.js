export function removeDuplicates(array, propertyName){
    return [...new Set(array.map(object => object[propertyName]))]; 
};