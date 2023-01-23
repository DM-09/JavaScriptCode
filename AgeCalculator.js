//Author: DM-09

function AgeCalc(BY, BM, BD) {
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY)
  
  if (NT[1] >= BM && NT[2] >= BD) {
    return  age
  } else {
    return age - 1
  }
};

//age calculator(만 나이 계산기)
//Argument: BY = year of birth(int), BM = month of birth(int), BD = Date of birth(int)
//인자: BY = 태어난 해(정수), BM = 태어난 달(정수), BD = 태어난 날(정수)

//ex. Birth Date(생년월일): 07/17/2009, AgeCalc(2009, 7, 17)


function KorAgeCalc(BY, BM, BD) { 
  var now = new Date();
  var NT = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
  
  var age = Number(NT[0] - BY) + 1
  return  age
};

// Korean age calculator(한국식 나이 계산기)
//Argument: BY = year of birth(int), BM = month of birth(int), BD = Date of birth(int)
//인자: BY = 태어난 해(정수), BM = 태어난 달(정수), BD = 태어난 날(정수)

//ex. Birth Date(생년월일): 07/17/2009, AgeCalc(2009, 7, 17)
