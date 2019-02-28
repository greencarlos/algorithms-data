#!/usr/bin/env python3
from collections import Counter

## Given two lists of strings, with duplicates, compare them for equality. 
## Equality means exactly the same elements exist in both lists.
## For example:
## list_1 = ['a','b','c','c']
## list_2 = ['a','c','b','c']
## compare_lists(list_1, list_2)
## True

## Comments on implementation
## - Does the function deal with imbalanced list sizes? list_a is 1 element, 
## list_b is 2 elements

## - Does the function deal with duplicates?  It's possible to implement, 
## - but to have it not correctly detect duplicates.  
## For example if a list has 3 A's -vs- 2 A's.

# PASS
test_suites = {
    "True": (
        (['a', 'a', 'a'], ['a', 'a', 'a']),
        (['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']),
        (['a', 'a', 'b', 'c'], ['a', 'a', 'c', 'b']),
        ([], [])
    ),
    "False": (
        (['a', 'a', 'b', 'c'], ['a', 'a', 'c', 'b', 'c']),
        (['a', 'a', 'b', 'c', 'c'], ['a', 'a', 'c', 'b']),
        (['a', 'a', 'b', 'c'], ['a', 'a']),
        (['a', 'c', 'c'], ['a', 'b', 'c']),
        ([], ['a', 'a'])
    )
}