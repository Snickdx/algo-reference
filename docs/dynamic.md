Dynamic Programming is a technique of solving problems by first tackling a simpler version of the problem, repeatedly adding more levels of complexity and solving them
until the solution of the original problem is achieved.

!!! Note
    Coming up with new Dynamic Programming solutions is typically a difficult task, however we will be looking at classical DP problems to demonstrate the technique. All of these
    problems are classed as optimization problems where there are many solutions but the goal is to find the 'best' one.

## Coin Change

### Problem
The problem is given coins of different values, make change for different amounts while minimizing the amount of coins used.
For example given 1¢, 5¢, and 7¢ coins, determine the minimum amount of coins needed to make amounts for 0 to 12.

!!! Note
    Intuitively you might use a 'greedy' approach where you simply select the largest value coins that is less than the amount to be made. However, this approach
    is not guaranteed to achieve the optimal solution for any set of values.

    example: to make 10¢ the greedy technique would select  1 7¢ coin then 3 1¢ coins but a better answer would be 2 5¢ coins. The greedy approach would stop after finding
    its first soltuion regardless of a better one existing.

### Solution

The dynamic programming approach would start by simplifying the problem as much as possible. What if you only had 1¢ coins? Then the solution is easy, we need n amount of 1¢ coins to make n¢.

| Value  |0|1|2|3|4|5|6|7|8|9|10|11|12|
|--------|-|-|-|-|-|-|-|-|-|-|-|-|-|
| 1¢ only|0|1|2|3|4|5|6|7|8|9|10|11|12|

Then we add another level, every level introduces a new coin value to consider. Knowing the solution for only 1¢ coins, what if we had 1¢ and 5¢ coins? For each solution with only 1¢ coins let's see if there exist a
better solution if we include a 5¢ coins where applicable.

| Value  |0|1|2|3|4|5|6|7|8|9|10|11|12|
|--------|-|-|-|-|-|-|-|-|-|-|-|-|-|
|1¢ only|0|1|2|3|4|5|6|7|8|9|10|11|12|
|1¢ & 5¢|0|1|2|3|4|1|2|3|4|5|2|3|3|

Using only 1¢ coins, we saw that we needed 5 coins to make a total value of 5 but if we can use 5¢ coins then we only need 1 coin and make similar savings moving forward.
Now we just add the final layer where we can choose 1¢, 5¢ or 7¢ coins and arrive at the solution to the original problem.

!!! Attention
    When calculating a solution with a new coin value, we need to add the amount of coins needed for the remaining value. Example:
    for 7, if we use a 5¢ coin we observe the value 5 columns to the left to add that 2 coins to cover the remaining 2¢ hence a total amount of 3 coins are needed.

| Value     |0|1|2|3|4|5|6|7|8|9|10|11|12|
|-----------|-|-|-|-|-|-|-|-|-|-|-|-|-|
|1¢ only    |0|1|2|3|4|5|6|7|8|9|10|11|12|
|1¢ & 5¢    |0|1|2|3|4|1|2|3|4|5|2 |3 | 4|
|1¢, 5¢ & 7¢|0|1|2|3|4|1|2|1|2|3|2 |3 | 4|

We only look at the previous row (1¢ & 5¢) and for each value compare it with the amount of coins needed using the new denomination (7¢) and select the smaller. For example
for 11 we saw we need 3 coins on the previous row, but if we use a 7¢ it would take 5 coins (1 7¢ + the 4 7 columns to the left) so we stick with the 3 from the previous
solution hence overcoming the caveats of the greedy approach.

### Algorithm

The amount of coins needed for amount j at level i is determined in 4 cases:

1. 0 if j is 0 (amount to make is 0 so we do not need any coins)
2. \(\infty\) if i is 0 ( no coins to choose from so we use infinity to indicate that is not possible to make the amount.)
3. The number of coins in the previous level if the new coin value is more than the amount j.
4. The smaller between 1 + num coins to make the amount minus the new coin value and the solution in the previous level, if the new coin value is less than the amount.

Let's model the algorithm mathematically. Let's have a 2 dimensional matrix C, each element would have two coordinates associated with it, the vertical axis
represents the level (1¢ only , 1¢ & 5¢, 1¢, 5¢ & 7¢) while the horizontal axis represents the amount (0 - 12) just like the table above. Therefore the value in C at level i
for amount j is given by:

\[ C[i][j] = \begin{cases}
      0 & j = 0 \\
      \infty & i = 0 \\
      C[i-1][j] &  j \lt V[i] \\
      min(C[i-1][j], 1 + C[i][j - V[i]]) & V[i] \leq j
   \end{cases}
\]

!!! Note
    1. In this book we would use i for the vertical axis and j for the horizontal as a convention.
    2. V[i] is the value of the newest denomination at level i eg V[1] = 1, V[2] = 5, V[3] = 7

Below is some python code that will fill out the matrix.

``` python
def min(A, B):
	if A < B:
		return A
	return B

def fill_table(C, num_denom, max_amt):

    V = [0, 1, 5, 7]

    for i in range(0, num_denom):
        for j in range(0, max_amt):
            if i == 0:
                C[i][j] = 9999
            elif j == 0:
            	C[i][j] = 0
            elif V[i] > j:
                C[i][j] = C[i-1][j]
            else:
                C[i][j] = min(C[i-1][j], 1 + C[i][j - V[i]])


if __name__ == "__main__":
    num_denom = 4
    max_amt = 12
    C = [[0 for x in range(max_amt)] for y in range(num_denom)]
    fill_table(C, num_denom, max_amt)
    print(C)


```

## 0-1 Knapsack

### Problem

You have a knapsack which can carry a limited weight and several items, each with a weight and value. You want to make the best selection of the items to maximize the total value
while still adhering to the sack's weight limit. For example the weight and value of three items are as follows; item 1 (1, 4), item 2 (2, 5), item 3 (4, 8) and item 4 (5, 10) and a max weight of 12.

### Solution

Simplify the problem; for different knapsack capacities (0 - 12) what is our total value if we only have item 1 available for selection?

| Value      |0|1|2|3|4|5|6|7|8|9|10|11|12|
|------------|-|-|-|-|-|-|-|-|-|-|-|-|-|
| item 1 only|0|4|4|4|4|4|4|4|4|4|4|4|4|

Include item 2 if there's space for it.

| Value      |0|1|2|3|4|5|6|7|8|9|10|11|12|
|------------|-|-|-|-|-|-|-|-|-|-|-|-|-|
| item 1 only|0|4|4|4|4|4|4|4|4|4|4|4|4|
| items 1,2  |0|4|4|4|9|9|9|9|9|9|9|9|9|

From 3 onwards we have space for both items so they are both selected to give a total value of 9. Now for the next level;

!!! Note
    Unlike coins we have just one of each item, therefore when finding the total value for a new item we add its value with the total value in the **previous row** for the remaining space.
    Eg in column 4 we compare the total value 4 in the previous row with a new total value which we can achieve if we include item 2. This new total value =
    value of the new item (5) + total value 4 columns (weight of new item) to the left in the previous row (4) =  9.


Then we do the same for the next 2 items.


| Value           |0|1|2|3|4|5|6|7|8 |9 |10|11|12|
|------------     |-|-|-|-|-|- |- |- |- |- |- |- |- |
| item 1 only     |0|4|4|4|4|4 |4 |4 |4 |4 |4 |4 |4 |
| items 1, 2      |0|4|5|9|9|9 |9 |9 |9 |9 |9 |9 |9 |
| items 1, 2, 3   |0|4|5|9|9|12|13|17|17|17|17|17|17|
| items 1, 2, 3, 4|0|4|5|9|9|12|14|17|19|19|22|23|27|





## Knapsack With Replacements

## Longest Common Sub Sequence