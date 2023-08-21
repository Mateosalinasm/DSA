Merge Sort
----------

Merge Sort(x1, x2, x3, ..., xn)
    if n = 1 
        return x
    else 
        return merge[mergeSort(x, x[n/2])], mergeSort[x[n/2 + 1], xn]
                        sort 1st half           sort 2nd half
--------------------------------------------------------------------------------

CONCISE SUMMARY:

Merge Sort is a sorting algorithm that divides the unsorted list into two halves, recursively sorts them, and then merges the sorted halves to get the final sorted output. It has a time complexity of O(n log n), making it efficient for large datasets.

-------------------------------------------------------------------------------

IN-DEPTH SUMMARY

Merge Sort is a popular and efficient sorting algorithm that follows the divide-and-conquer approach. It works by breaking down the unsorted list into smaller sublists, sorting those sublists, and then merging them back together to produce the sorted output.

Here's a step-by-step explanation of the Merge Sort algorithm:

DIVIDE: The first step is to divide the unsorted list into two halves. This is done by finding the middle index of the list.

RECURSIVELY SORT: Now, recursively apply the Merge Sort algorithm on both halves obtained in the previous step. This will further divide the sublists until they become small enough to be sorted easily.

MERGE: After sorting the sublists, merge them back together to get the final sorted list. The merging is done by comparing the elements of the two sublists and arranging them in the correct order.

BASE CASE: The recursion continues until we reach the base case, where the sublist contains only one element. A list with one element is already considered sorted, so it doesn't need any further sorting.

The merging step is the core part of the Merge Sort algorithm and is done in a way that guarantees the elements are in the correct order after merging the two sublists. The process continues until all the sublists are merged back together, resulting in the sorted list.

The time complexity of Merge Sort is O(n log n), which makes it one of the fastest sorting algorithms for large datasets. However, it requires additional memory space for storing the sublists during the sorting process, which might be a consideration in some situations.

To summarize, Merge Sort is a divide-and-conquer algorithm that breaks down the sorting problem into smaller sub-problems, solves them recursively, and then combines the solutions to obtain the final sorted list.

-------------------------------------------------------------------------------
EX:

18      7         3         5    12      2         1          10
\                          /      \                           /
 \                        /        \                         /
  \                      /          \                       /
   \                    /            \                     /
    18      7  3       5             12        2    1     10
     \     /    \     /                \       /    \     /
      \   /      \   /                  \     /      \   /
       \ /        \ /                    \   /        \ /
      18 7        3 5                    12  2       1  10
       \/          \/                      \/         \/
      7 18        3 5                     2 12        1 10
        \         /                         \          /
         \       /                           \        /
          \     /                             \      /
          3 5 7 18                            1 2 10 12
           \    /                              \    /
            \  /                                \  /
             \/                                  \/
              1     2    3   5   7   10    12    18

-------------------------------------------------------------------------------
