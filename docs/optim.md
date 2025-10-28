## Optimization Problems

Optimization problems ask for the best solution according to some objective (maximize value, minimize cost) subject to constraints.

### Common paradigms

- Greedy algorithms — make the locally optimal choice at each step; correct when a greedy-choice property and optimal substructure hold (e.g., activity selection, Huffman coding).
- Dynamic programming — break into overlapping subproblems and reuse solutions (e.g., knapsack, shortest paths with DAGs).
- Branch-and-bound — prune search using bounds for combinatorial optimization (see `branch.md`).
- Linear programming — express objective and constraints as linear functions and solve with simplex or interior point methods.

### Example: Activity Selection (greedy)

Choose the activity with the earliest finish time, remove incompatible activities, and repeat. This greedy choice yields an optimal set of mutually compatible activities.

### Complexity and hardness

Some optimization problems are NP-hard (e.g., general traveling salesman, general integer programming). For those, we rely on approximation algorithms, heuristics, or exponential-time exact algorithms with pruning.

See `dynamic.md` for dynamic programming approaches and `branch.md` for branch-and-bound techniques.
