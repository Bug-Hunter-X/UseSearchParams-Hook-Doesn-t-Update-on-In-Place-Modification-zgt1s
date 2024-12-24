In React Router Dom v6, when using the `useSearchParams` hook, if you try to update the search params using a function that modifies the existing search params object directly, it might not trigger a re-render. This is because the `useSearchParams` hook performs a shallow comparison to check if the search params have changed.  If you modify the object in place, the reference remains the same, so React doesn't detect the change. 

```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUpdate = () => {
    // Incorrect: Modifying the object in place
    searchParams.append('sort', 'asc'); 
    //This will NOT trigger a re-render
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Search Params</button>
    </div>
  );
}
```