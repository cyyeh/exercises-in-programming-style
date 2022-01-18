# Exercises

1. Another language. Implement the example program in another language, but preserve the style.
2. Add method. Delete the last three lines of the example program, and replace the printing of the information with the following. Add a new method to the word_freqs_obj called top25 which sorts its freqs data and prints the top 25 entries. Then call that method. Constraint: The program cannot be changed at all until line #46 – your additions should come after that line.
3. this. In the example program, the prototype objects don’t use this or self to refer to themselves, and, instead, refer to themselves in the third person – e.g. line #25, data_storage_obj. Propose another representation of Closed Maps that uses the self-reference this. So, for example, the method words of the data storage object would be 'words' : lambda : this['data']
4. Constructor. In the example program, there is nothing special about constructors. Use your richer representation of object from the previous question to execute the constructor methods every time an object is created.
5. Object combinations. Let’s bring back the methods info of Chapter 11. Show how to reuse and overwrite method collections in the Closed Maps style by defining a map called tf_exercise that contains a generic info method that is then reused and overwritten by all the objects of the example program (or your version above).
6. A different task. Write one of the tasks proposed in the Prologue using this style.
