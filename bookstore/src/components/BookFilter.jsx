const BookFilter = ({ categories, selected, onChange }) => {
  return (
    <select value={selected} onChange={e => onChange(e.target.value)} className="p-2 border">
      <option value="All">All</option>
      {categories.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
};

export default BookFilter;