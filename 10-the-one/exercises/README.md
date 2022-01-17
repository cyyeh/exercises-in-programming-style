# Exercises

1. Another language. Implement the example program in another language, but preserve the style.
2. Class vs. functions. The Identity monad in the example is expressed as a class, TFTheOne. In functional programming languages, the monadic operations are simple wrap and bind functions. wrap takes a simple value and returns a function that, when called, returns the value; bind takes a wrapped value and a function, and returns the result of calling that function on the application of the wrapped value. Redo the example by defining these two functions and using them in the following manner:
`printme(..wrap(bind(wrap(sys.argv[1]),read_file),filter_chars)..)`
3. A different task. Write one of the tasks proposed in the Prologue using this style.