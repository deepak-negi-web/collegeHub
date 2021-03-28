export const getString = (
  dataArray = [],
  separator = ",",
  uppercase = true,
  nodeName = null
) => {
  let result = "";
  if (nodeName) {
    result = dataArray.map((data) => data[nodeName]).join(separator);
  } else {
    result = dataArray.join(separator);
  }
  result = uppercase && result.toUpperCase();
  console.log(dataArray, separator, uppercase, nodeName, result);
  return result;
};
