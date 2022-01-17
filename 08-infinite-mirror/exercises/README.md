# Exercises

1. Another language. Implement the example program in another language, but preserve the style. Pay particular attention to whether the language you choose supports tail recursion optimization or not; if it does, your program should reflect that, rather than blindingly copying the example Python program.
2. More recursion. Replace line #35 (loading and identification of stop words) with a function in infinite mirror style. What part of that line is easy to do in this style and what part is hard?
3. No global counts. The global variable wordfreqs (line #37) is passed to count, which modifies its value. So the code relies on the order of side effects. Do this in the Pipeline style instead, by returning the word frequencies from count and passing the returned value to the recursive calls.
4. A different task. Write one of the tasks proposed in the Prologue using this style.