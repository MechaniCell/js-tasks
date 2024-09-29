var maxProfit = function (prices) {
  let max = 0;
  for (i = 0; i < prices.length; i++) {
    for (j = 1 + i; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0 && prices[j] - prices[i] > max) {
        max =+ prices[j] - prices[i];
      } 
    }  
  }
  return max; 
}
  
maxProfit([7, 1, 5, 3, 6, 4]);
