# Ideas

Very temporary documentation. Shall be deleted in favor of [lipu sona].

[lipu sona]: lipu-sona.md

TODO: char as its own data type

## Comma

Commas `,` are treated like whitespace. it can be placed anywhere and be used stylistically.

## Comments

Comments are wrapped with `()`

```txt
(this is a comment)
```

## The computer

The computer may be referred to as `sina`, `ilo`, `ilo nanpa`, `ilo pi sitelen soweli`. In this document, if the sentence starts with `o`, it means the computer is being addressed with a command. You may use `sina o`, `ilo o`, `ilo nanpa o`, `ilo pi sitelen soweli o`, or just `o`.

## Data Types

there are 2 explicit types: integer `ijo` or `nanpa` (also used as boolean), and array `kulupu`.

integers have range from 0 to infinity. integers are also used as boolean, 0 being false and anything else as true.

arrays cannot contain arrays so it can only contain numbers.

## Variable declaration and assertion

`li` is used for declaration.

```txt
ijo Pu li ala.
kulupu Pa li ala.
```

Variables don't have scoping, there's only one scope for variables.

When such variable is already declared, this becomes an assertion instead, if it happens to be false, error will occur.

To declare non-empty array, use `jo`.

```txt
kulupu Pu li jo e wan, e tu, e tu wan.
```

## ala or weka

`ala` and `weka` are used to indicate 0 or empty array. These two can be interchanged, although, `weka` is also used in other things.

## numbers

You can use Arabic numerals or toki pona numerals.

```txt
ijo Pu li 42.
ijo Pa li mute mute tu.
```

## Assignment

`o` is used for assignment.

```txt
ijo Pu o wan.
```

Variables don't have to be declared to be assigned. Variables will be implicitly declared.

## ante

`ante`, along with `tawa`, is another way of assigning variables.

```txt
o ante e ijo Pu tawa wan.
```

However, with this, variables should be declared.

## pana

`pana`, along with `tawa`, is used to increment numbers or push to array. You can refer to other variable, the source variable won't be changed.

```txt
o pana e wan tawa ijo Pu
o pana e wan, e tu, e tu wan, tawa kulupu Pa
o pana e ijo Pu tawa kulupu
```

If you refer to an array, the whole source array will be copied and pushed to destination array.

```txt
kulupu Pu li jo e tu tu, e luka.
kulupu Pa li jo e wan, e tu, e tu wan.

o pana e kulupu Pu tawa kulupu Pa.
```

If you want to copy a certain range, use `ijo (length) nanpa (nth)` form. here, you need to use `tan` as well for source array.

array index starts with 1

```txt
kulupu Pu li jo e wan, e tu tu, e luka, e luka tu.
kulupu Pa li jo e wan, e tu, e tu wan.

o pana e ijo tu nanpa tu tawa kulupu Pa tan kulupu Pu tawa kulupu kulupu Pa.
```

## weka

`weka`, along with `tan`, is used to decrement an integer, or remove a section of an array.

```txt
o weka e tu tan ijo Pu.

o weka e ijo tu nanpa tu tan ijo Pa.
```

## lanpan

`lanpan` can be used in place of `weka`. along with others, the computer can be referred to as `kijetesantakalu`.

```txt
kijetesantakalu o lanpan e ale ale tan ijo Pu.
```

## ma

`ma` is used to mark a place in code, which can be used with `tawa`.

```txt
ni li ma Sike.

ma Sike Tu li ni.
```

## tawa

`tawa` may be used as go to.

```txt
o tawa ma Sike.
```

## Conditionals

TODO
