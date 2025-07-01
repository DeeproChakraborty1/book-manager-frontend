const BookSorter = ({ value, onChange }) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className="p-2 border">
      <option value="title">Sort by Title</option>
      <option value="price">Sort by Price</option>
    </select>
  );
};

export default BookSorter;