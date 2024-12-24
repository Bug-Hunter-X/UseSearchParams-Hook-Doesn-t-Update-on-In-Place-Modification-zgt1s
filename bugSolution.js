The correct way is to create a *new* search params object and pass that to `setSearchParams`:

```javascript
import { useSearchParams } from 'react-router-dom';

function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleUpdate = () => {
    // Correct: Create a new object
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.append('sort', 'asc');
    setSearchParams(newSearchParams);
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Search Params</button>
      <p>Search Params: {searchParams.toString()}</p>
    </div>
  );
}
```

Alternatively, you can use the spread syntax to create a new object: 
```javascript
const handleUpdate = () => {
    setSearchParams((params) => (
      { ...params, append: 'sort=asc'}
    ));
};
```
This ensures that a new object is created, triggering a re-render and updating the UI.