# React Router v6 useSearchParams In-Place Modification Bug

This repository demonstrates a subtle bug in React Router v6's `useSearchParams` hook.  Directly modifying the searchParams object using methods like `append` or `set` doesn't trigger a re-render because of shallow comparison.  The solution provides the correct way to update search parameters to ensure that the UI reflects changes.

## Bug Description

When you attempt to update the search parameters by modifying the object returned by `useSearchParams` in place, the component does not re-render. This is because React's shallow comparison doesn't detect the change since the object reference remains unchanged.

## Solution

The solution shows the correct way to update the search params using the `setSearchParams` function, ensuring that the UI updates correctly.