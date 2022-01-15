Exercises in Programming Style
==============================

Comprehensive collection of well-known, and not so well-known, programming
styles using a simple computational task, term frequency. All programs run 
with the following command line:

```bash
python tf-NN.py ../pride-and-prejudice.txt
```

NOTE: the code in the master branch is written for Python 3.

Explanations and historical context for all these styles can be found in the
companion book [Exercises in Programming Style](http://www.amazon.com/Exercises-Programming-Style-Cristina-Videira/dp/1482227371/).


To test your work, make sure your script is executable and then run:

```
./test/test.sh NN
```

Where `NN` is the number prefix of the directory you're adding.

P.S. Inspiration for this collection: http://en.wikipedia.org/wiki/Exercises_in_Style


Term Frequency

Given a text file, we want to display the N (e.g. 25) most frequent words and corresponding frequencies ordered by decreasing value of frequency. We should make sure to normalize for capitalization and to ignore stop words like “the,” “for,” etc. To keep things simple, we don’t care about the ordering of words that have equal frequencies.

Here is an example of an input file and corresponding output after computing the term frequency:

```
Input:
   White tigers live mostly in India
   Wild lions live mostly in Africa

Output:
   live - 2
   mostly - 2
   africa - 1
   india - 1
   lions - 1
   tigers - 1
   white - 1
   wild - 1”
```

---

Other computational tasks provided in the book

1. Word Index

Given a text file, output all words alphabetically, along with the page numbers on which they occur. Ignore all words that occur more than 100 times. Assume that a page is a sequence of 45 lines. For example, given Pride and Prejudice, the first few entries of the index would be:

```
abatement - 89
abhorrence - 101, 145, 152, 241, 274, 281
abhorrent - 253
abide - 158, 292
...
```

2. Words in Context

Given a text file, display certain words alphabetically and in context, along with the page numbers of the pages in which they occur. Assume that a page is a sequence of 45 lines. Assume that context consists of the preceding and succeeding two words. Ignore punctuation. For example, given Pride and Prejudice, the words “concealment” and “hurt” would result in the following output:

```
perhaps this concealment this disguise - 150
purpose of concealment for no - 207
pride was hurt he suffered - 87
must be hurt by such - 95
and are hurt if i - 103
pride been hurt by my - 145
must be hurt by such - 157
infamy was hurt and distressed – 248
```

Suggestion of words for the words in context task: concealment, discontented, hurt, agitation, mortifying, reproach, unexpected, indignation, mistake, and confusion.
