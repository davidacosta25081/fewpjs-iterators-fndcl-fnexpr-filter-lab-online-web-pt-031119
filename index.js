function findMatching(drivers, name) {
  let result = drivers.filter(driver => {
  return driver === name;
 });
return result;
}
