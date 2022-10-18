# Ideas

Very temporary documentation. Shall be deleted in favor of [lipu sona].

[lipu sona]: lipu-sona.md

TODO: string and IO

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

there are 3 types: integer, string, and array.

nasin nanpa pi toki pona have some form of explicit typing: integers can be referred to as `ijo` or `nanpa`; strings can be referred to as `ijo`, `sitelen`, or `kulupu`; arrays can be referred to as `ijo` or `kulupu`.

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

you can use `en` to declare variables with the same value.

```txt
ijo Pu, en ijo Pa, li tu.
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

When referring to other variable, you may use `sama`.

```txt
ijo Pu o sama ijo Pa.
```

You can use `en`.

```txt
ijo Pu, en ijo, Pa o wan.
```

Variables don't have to be declared to be assigned. Variables will be implicitly declared.

## ante

`ante`, along with `tawa`, is another way of assigning variables.

```txt
o ante e ijo Pu tawa wan.
```

You can use multiple `e`.

```txt
o ante e ijo Pu, e ijo Pa, tawa wan.
```

However, with this, variables should be declared.

## pana

`pana`, along with `tawa`, is used to increment numbers or push to array. You can refer to other variable, the source variable won't be changed.

```txt
o pana e wan tawa ijo Pu.
o pana e wan, e tu, e tu wan, tawa kulupu Pa.
o pana e ijo Pu tawa kulupu.
```

You can use multiple `tawa`.

```txt
o pana e wan tawa ijo Pu, tawa ijo Pa.
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

o pana e ijo tu nanpa tu tan kulupu Pu, tawa kulupu kulupu Pa.
```

## weka

`weka`, along with `tan`, is used to decrement an integer, or remove a section of an array using `ijo (length) nanpa (nth)` form.

First form is addressing the integer or `ijo` of an array.

```txt
tu o weka tan ijo Pu.

ijo tu nanpa tu o weka tan ijo Pa.
```

Second form is addressing the computer itself.

```txt
o weka e tu tan ijo Pu.

o weka e ijo tu nanpa tu tan ijo Pa.
```

With the second form, you can use multiple `tan`.

```txt
o weka e tu tan ijo Pu, tan ijo Pa.
```

`lanpan` can be used in place of `weka` in second form. along with others, the computer can be referred to as `kijetesantakalu` or `kijetesantakalu tonsi` when `lanpan` is used.

```txt
kijetesantakalu tonsi o lanpan e ale ale tan ijo Pu.
```

## ma

`ma` is used to mark a place in code, which can be used with `tawa`.

```txt
ni li ma Sike.

ma Sike Tu li ni.
```

## tawa

`tawa`, among other things, may be used as go to.

```txt
o tawa ma Sike.
```

## Conditionals

TODO
