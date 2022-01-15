Exercises in Programming Style
==============================

Comprehensive collection of well-known, and not so well-known, programming
styles using a simple computational task, term frequency. All programs run 
with the following command line:

```bash
python tf-NN.py ../pride-and-prejudice.txt
```

NOTE: the code in the master branch is written for Python 3. If you are looking
for a version for Python 2.7, check out the 2.7 branch or the v1.0 release.

Explanations and historical context for all these styles can be found in the
companion book [Exercises in Programming Style](http://www.amazon.com/Exercises-Programming-Style-Cristina-Videira/dp/1482227371/).

Additions are welcome! 

You can contribute: 
- new exercises related to the existing styles
- an entirely new programming style
- new names for the existing styles
- discussion of names, pros and cons of each style

Because this project and the companion book are used in courses, at the
suggestion of several students I am no longer accepting contributions 
of the existing styles written in different programming languages. 
That is the first exercise that the students do. Having the solutions
easily available here will rob future students of the learning experience!

Please follow the conventions suggested by the existing code base,
specifically, if you are contributing a new style, make a new folder called
nn-funname and add an example program in that folder called
tf-nn.ext. (nn is the next avalaible number in the collection)
Additionally, add a README.md file that clearly describes the
contraints for writing programs in that style. I will only consider
new styles corresponding to constraints that are clearly different
from the ones that already exist in the collection. (different
programs written in existing styles are exercises for students, and
should not be here)

Contributions of new names and discussion should be done under Issues
or on the Wiki part of this repo.

To test your work, make sure your script is executable and then run:

```
./test/test.sh NN
```

Where `NN` is the number prefix of the directory you're adding.

Never stop exercising!

Love,
Crista

P.S. Inspiration for this collection: http://en.wikipedia.org/wiki/Exercises_in_Style


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
