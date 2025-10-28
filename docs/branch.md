## Branch and Bound

Branch and bound is an optimization of exhaustive search that keeps track of upper and/or lower bounds on the best possible solution in a subtree, allowing the algorithm to skip (prune) branches that cannot produce a better solution than the best found so far.

### How it differs from backtracking

- Backtracking stops when constraints fail; branch-and-bound also uses a cost bound to prune branches that cannot beat current best.

### Typical structure

1. Maintain a priority queue (or recursion) of partial solutions.
2. For each partial solution, compute a bound on the best possible completion.
3. If the bound is worse than the current best solution, prune that branch.
4. Otherwise, branch (expand) and continue.

### Example: 0-1 Knapsack (branch and bound)

Use a bounding function that computes the maximum possible value achievable by filling remaining capacity with fractional parts of items (greedy fractional knapsack). If this bound is ≤ current best value, we can prune.

### When to use

Branch-and-bound is useful for combinatorial optimization problems where good bounds are cheap to compute and prune large subtrees (e.g., knapsack, traveling salesman, scheduling).

See also: `dynamic.md` and `optim.md` for other approaches to optimization problems.

