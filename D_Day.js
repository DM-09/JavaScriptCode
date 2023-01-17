//Author: DM-09

function D_Day(Y, M, D) {
  var now = new Date();
  var TheDay = new Date(Y, M - 1, D, 00, 00, 00);
  var days = Math.ceil((TheDay - now) / 86_400_000)
  
  if (days < 0) {
    days = 'D+' + (days * -1)
  } else {
    days = 'D-' + days
  }
  
  return days
};

//D-Day function

//Argument: Y = year(int), M = month(int), D = Date(int)
//인자: Y = 해(정수), M = 달(정수), D = 날(정수)
//ex. if 1/1/2024 then, D_Day(2024, 1, 1)
