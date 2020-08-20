// https://www.codewars.com/kata/52449b062fb80683ec000024

const toCapitalize = str => str && `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const isValid = str => str && str.length < 140 ? true : false;

const generateHashtag = (str) => {
  const words = str.split(' ').map(toCapitalize).join('');

  return isValid(words) && `#${words}`;
}