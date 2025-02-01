```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array: count is included
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```