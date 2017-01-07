# linter-spell-cjk

Hunspell misdetects a cjk word as English word, and try to correct it. Of course,
there's no matching word in the dictionary, resulting linter shows noisy
misspelling warnings on cjk words.

This package acts as a fake dictionary to ignore such cjk words.

In short,

Without linter-spell-cjk:

![without linter-spell-cjk](https://raw.githubusercontent.com/naota/linter-spell-cjk/master/before.png)

With linter-spell-cjk:

![with linter-spell-cjk](https://raw.githubusercontent.com/naota/linter-spell-cjk/master/after.png)
