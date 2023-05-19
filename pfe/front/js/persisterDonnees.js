/* 
const data = {
  "oxy" : 0 ,
  "temp" : 0 ,
  "tensio" : 0 , 
  "poid" : 0 ,
  "size" : 0
  "cc" : 0
}
*/

const MESURES = ["cc", "oxy", "temp", "poid", "tensio", "size"];

/** save data to local storage
 * @param {string} type_mesure
 * @enum "cc" , "oxy", "temp", "poid", "tensio" , "size"
 * @param {string} data
 * @returns {void}
 */

function persistDataToLocalStorage(type_mesure, data) {
  window.localStorage.setItem(type_mesure, data);
}

function clearData() {
  window.localStorage.clear();
}

/** get data from local storage
 * @returns {object}
 * @example
 * {
 * "oxy" : 0 ,
 * "temp" : 0 ,
 * "tensio" : 0 ,
 * "poid" : 0 ,
 * "size" : 0
 * "cc" : 0
 * }
 */
function getAllData() {
  let data = {};
  MESURES.forEach(mesure => {
    data[mesure] = window.localStorage.getItem(mesure);
  });
  return data;
}

/** parse data to float
 * @returns {object}
 */
function parseDataToFloat() {
  let data = getAllData();

  MESURES.forEach(mesure => {
    data[mesure] = parseFloat(data[mesure] || 0);
  });

  console.log(data);

  return data;
}

/**get authentication token from local storage */
function getAuthToken() {
  return window.localStorage.getItem("token");
}
