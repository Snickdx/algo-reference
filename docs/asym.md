## Asymptotic Notation

Asymptotic notation is used to describe the growth of a function (usually running time or memory) as the input size grows.
It suppresses constant factors and low-order terms so we focus on the dominant behavior.

### Common notations

- Big-O, O(f(n)) — an upper bound (worst-case growth).
- Theta, Θ(f(n)) — a tight bound (both upper and lower).
- Omega, Ω(f(n)) — a lower bound (best-case growth).

### Examples

- A simple loop for i in 0..n - 1 does O(n) work.
- A nested loop i in 0..n, j in 0..n does O(n^2).
- Binary search on a sorted array is O(log n).

### Rules and tips

1. Constants drop: 3n + 5 is O(n).
2. Lower-order terms drop: n^2 + n is O(n^2).
3. When combining functions, the dominant term wins: O(n) + O(n log n) = O(n log n).

### Master theorem (recurrences)

Many divide-and-conquer recurrences of the form

$$T(n) = a\,T(n/b) + f(n)$$

can be analyzed with the Master theorem to determine whether f(n) is smaller, equal or larger than n^{log_b a} and derive the asymptotic bound.

### Common complexity classes (quick reference)

- O(1) — constant
- O(log n) — logarithmic
- O(n) — linear
- O(n log n) — linearithmic (common for efficient sorts)
- O(n^2) — quadratic
- O(2^n), O(n!) — exponential / factorial (usually intractable for large n)

See also: `math.md` for summations and `dynamic.md` for techniques that reduce exponential problems to polynomial ones.

