const DropdownFilter = ({ label, options, setFilter }) => {
  return (
    <div className="input-group mb-3 sasb-shadow">
      <select
        className="form-select shadow-none"
        onChange={(event) => setFilter(event.target.value)}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          {label}
        </option>
        {options?.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownFilter;
