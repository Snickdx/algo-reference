## Algorithms and Summations
This topic is particularly useful as it demonstrates that algorithms really are just mathematical structures.
Take a look at the for loop below.

```c hl_lines="3" linenums="1"
    int i;
    for(i=0; i<10; i++)
       print("Hello");
```

It's easy to see that the highlighted statement would execute 10 times, but this can be represented mathematically as a [summation](https://en.wikipedia.org/wiki/Summation).

\( \sum_{i=0}^{10} 1 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 10 \)

Notice that the initial value of i is at the bottom of the summation while the terminating value is on top, for loops are basically summations!

!!! Note
    Printing is a relatively computationally simple operation hence we say it's equal to 1, if we print 10 times then we are adding 1, 10 times.
    Similarly if the terminal condition for the loop was i < n then the loop would run n times (starting at 0).


## Summations Formulas
All for-loops generate sequences we often represent with summations when analysing algorithms. Many common summations have closed-form formulas — knowing these helps simplify runtime expressions.

### Historical note — the Gauss story
One famous story about the sum of the integers from 1 to n concerns the mathematician Carl Friedrich Gauss. As a schoolboy he was asked to add the integers from 1 to 100. He noticed a pairing trick: each term from the start and end of the list sums to the same value (1+100, 2+99, ...), which leads quickly to the formula for the sum of the first n integers. This pairing is the derivation we show below.

### Sum of the first n integers (1 + 2 + ... + n)
Derivation (pairing trick): write the sum forwards and backwards and add termwise:

\(
S = 1 + 2 + 3 + \dots + (n-1) + n
\)
\(
S = n + (n-1) + (n-2) + \dots + 2 + 1
\)
Adding the two representations term-by-term gives \(2S = (n+1) + (n+1) + \dots + (n+1)\) with \(n\) terms, so
\(
2S = n(n+1) \quad\Rightarrow\quad S = \frac{n(n+1)}{2}.
\)

Example: sum of integers from 1 to 100

\(
\sum_{i=1}^{100} i = \frac{100\cdot 101}{2} = 5050.
\)

### Sum of an arithmetic progression (AP)
An arithmetic progression has the form
$a,\; a+d,\; a+2d,\; \dots,\; a+(n-1)d$
where \(a\) is the first term, \(d\) the common difference and there are \(n\) terms. The sum \(S_n\) can be derived using a similar pairing trick:

\(
S_n = a + (a+d) + (a+2d) + \dots + (a+(n-1)d)
\)
Reverse and add:
\(
2S_n = (a + (a+(n-1)d)) + ((a+d) + (a+(n-2)d)) + \dots
\)
Each pair sums to \(2a + (n-1)d\), and there are \(n\) such pairs, so
\(
2S_n = n(2a + (n-1)d) \quad\Rightarrow\quad S_n = \frac{n}{2}\bigl(2a + (n-1)d\bigr).
\)

Common special case: if \(a=1\) and \(d=1\) this reduces to the sum of integers formula above.

Example: sum of the first 10 terms of AP with \(a=3\) and \(d=5\):
\(
S_{10} = \frac{10}{2}\bigl(2\cdot3 + 9\cdot5\bigr) = 5(6 + 45) = 5\cdot51 = 255.
\)

### Sum of a geometric progression (GP)
A geometric progression is of the form
$a,\; ar,\; ar^2,\; \dots,\; ar^{n-1}$
where \(a\) is the first term and \(r\) the common ratio. For \(r \neq 1\), multiply the sum by \(r\) and subtract:

\(
S_n = a + ar + ar^2 + \dots + ar^{n-1}
\)
\(
rS_n = ar + ar^2 + \dots + ar^{n}
\)
Subtracting the two equations gives
\(
S_n(1-r) = a(1 - r^n) \quad\Rightarrow\quad S_n = a\frac{1-r^n}{1-r}.
\)

If \(|r|<1\) and \(n\to\infty\) the infinite sum converges to

\(
S_\infty = \frac{a}{1-r}.
\)

Example: sum of GP \(1 + 2 + 4 + 8 + \dots + 2^{6}\) (i.e., \(a=1\), \(r=2\), \(n=7\)):

\(
S_7 = 1\cdot\frac{1-2^{7}}{1-2} = \frac{1-128}{-1} = 127.
\)

### Quick reference — commonly used formulas
- Sum of first \(n\) integers: \(\sum_{i=1}^{n} i = \dfrac{n(n+1)}{2}\)
- Sum of an AP (first term \(a\), difference \(d\), \(n\) terms): \(S_n = \dfrac{n}{2}(2a+(n-1)d)\)
- Sum of a GP (first term \(a\), ratio \(r\), \(n\) terms): \(S_n = a\dfrac{1-r^{n}}{1-r}\) (when \(r\neq1\))


### Additional common summations
1. Sum of N constants - \( \sum_{i=1}^{a} c = an \)
2. Sum of integers - \( \sum_{i=1}^{n} i = \frac{n(n+1)}{2} \)
3. Sum of integers squared - \( \sum_{i=1}^{n} i^2 = \frac{n(n+1)(n+2)}{6}\)
4. Sum of integers to the k<sup>th</sup> power - \( \sum_{i=1}^{n} = \frac{n^{k+1}}{k + 1} \)
5. Sum of a constant to the power of i - \( \sum_{i=0}^{n} a^{i} = 2^{n + 1} - 1\)
6. Sum of i2<sup>i</sup> - \( \sum_{i=1}^{n} i2^{i} = (n -1) 2^{n + 1}\)
7. Sum of 1/i (aka Harmonic Series) - \( \sum_{i=1}^{n} \frac{1}{i} = ln(n) + c\)
8. Sum of powers of 2 - \( \sum_{i=0}^{n} 2^{k} =  2^{n + 1}  - 1\)
9. Sum of Log (i)  - \( \sum_{i=1}^{n} lg i = n lg(n) \)


## Summation Manipulations
The following are some rules in manipulating summations

1. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
2. \( \sum_{i = l}^{u} (a \pm b)  = \sum_{i = l}^{u} a \pm \sum_{i = l}^{u} b\)
3. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
4. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
5. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)

## Other Noteworthy Topics

1. [Permutations and Combinations](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
2. [Logarithms](http://www.mathsisfun.com/algebra/exponents-logarithms.html)

!!! quote
    To me, mathematics, computer science, and the arts are insanely related. They're all creative expressions.
    -Sebastion Thrun