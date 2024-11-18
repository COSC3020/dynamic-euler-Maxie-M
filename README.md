# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Runtime Analysis, Maxie M. 
### Worst-Case Time Complexity: 
- Loop runs $n$ iterations
  - each iteration involves a constant amount of work
- **Time Complexity:** $\Theta(1)$
### Space Complexity: 
- only keeps track of a few variables
  - function uses constant amount of space
- **Space Complexity:** $\Theta(1)$
### Explanation of My Implementation: 
- **Original:** in the original implementation, it repeatedly computes factorial values recursively
  - Leads to $O(n!)$ recursive calls for large $n$ 
- **My Implementation:** will compute $n$ terms iteratively with an efficient single-pass computation of factorials
  - Reducing the time complexity to $\Theta(n)$
### Plagiarism Statement:
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
### Resources:
- https://www.sciencedirect.com/science/article/abs/pii/S1468121821001395
