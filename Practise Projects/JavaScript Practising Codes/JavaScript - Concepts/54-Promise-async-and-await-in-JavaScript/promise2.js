const uno = () => {
    return "I am One";
  };
  
  const dos = async() => {
    setTimeout(() => {
      return "I am two";
    }, 3000);
  };
  
  const tres = () => {
    return "I am Three";
  };
  
  const callMe = () => {
    let valOne = uno();
    console.log(valOne);
  
    let valTwo = dos();
    console.log(valTwo);
  
    let valThree = tres();
    console.log(valThree);
  };
  
  callMe();