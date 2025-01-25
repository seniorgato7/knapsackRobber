function knapsack(weights, values, capacity) {
  const n = values.length;
  // Create a 2D array to store the maximum value at each n and capacity
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  // Build the dp array
  for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
          } else {
              dp[i][w] = dp[i - 1][w];
          }
      }
  }

  return dp[n][capacity];
}

// Define the weights and values of the items
const weights = [1, 2, 3];  // weights of the items
const values = [10, 15, 40]; // values of the items
const capacity = 5;          // maximum weight capacity of the knapsack


// Calculate the maximum value that can be carried
const maxValue = knapsack(weights, values, capacity);
console.log(`The maximum value that can be carried in the knapsack is: ${maxValue} pesos`);