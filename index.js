  function findMatching(drivers, name) {
    let result = drivers.filter(driver => {

    let driver2 = driver.toLowerCase();
    let name2 = name.toLowerCase();

    return driver2 === name2;
  });
  return result;
  }


  function fuzzyMatch(drivers, letters) {
    let result = drivers.filter(driver => {
      let driverLetters = driver.charAt(0) + driver.charAt(1);
    });






  }
