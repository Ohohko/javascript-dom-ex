const storm = {
    superPower: "flying"
  };
  function printSuperPower() {
    console.log("my superpower is " + this.superPower);
  }
  const boundSuperPowers = printSuperPower.bind(storm)
  boundSuperPowers();