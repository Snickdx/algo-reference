## Algorithms and Summations
This topic is particularly useful as it demonstrates that algorithms really are just mathematical structures.
Take a look at the for loop below.

```c hl_lines="3"
    int i;
    for(i=0; i<10; i++)
       print("Hello");
```

It's easy to see that the highlighted statement would execute 10 times, but this can be represented mathematically as a [summation](https://en.wikipedia.org/wiki/Summation).

$$ \sum_{i=0}^{10} 1 = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 10 $$

Notice that the initial value of i is at the bottom of the summation while the terminating value is on top, for loops are basically summations!

Printing is a relatively computationally simple operation hence we say it's equal to 1, if we print 10 times then we are adding 1, 10 times.
Similarly if the terminal condition for the loop was i < n then the loop would run n times (starting at 0).


## Summations Formulas
All for loops generate a sequence which we typically seek to determine when analyzing algorithms. Many summations can be evaluated with an equivalent expression which we use to get our final answer.
In the example above that formula was simply n, but the following are examples more complex summations and their equivalent expressions.

1. Sum of N constants

    \( \sum_{i=1}^{a} c = an \)

2. Sum of integers

    \( \sum_{i=1}^{n} i = \frac{n(n+1)}{2} \)

3. Sum of integers squared

    \( \sum_{i=1}^{n} i^2 = \frac{n(n+1)(n+2)}{6}\)

4. Sum of integers to the k<sup>th</sup> power

    \( \sum_{i=1}^{n} = \frac{n^{k+1}}{k + 1} \)

5. Sum of a constant to the power of i

    \( \sum_{i=0}^{n} a^{i} = 2^{n + 1} - 1\)


6. Sum of i2<sup>i</sup>

    \( \sum_{i=1}^{n} i2^{i} = (n -1) 2^{n + 1}\)


7. Sum of 1/i

    \( \sum_{i=1}^{n} = ln(n) + c\)


8. Sum of powers of 2

    \( \sum_{i=0}^{n} 2^{k} =  2^{n + 1}  - 1\)


9. Sum of Log (i)

    \( \sum_{i=1}^{n} lg i = n lg(n) \)




## Summation Manipulations
The following are some rules in manipulating summations

1. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
2. \( \sum_{i = l}^{u} (a \pm b)  = \sum_{i = l}^{u} a \pm \sum_{i = l}^{u} b\)
3. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
4. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
5. \( \sum_{i = l}^{u} ca = c\sum_{i = l}^{u} a\)
