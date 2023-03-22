const DropdownFilter = ({ selected, options }) => {
  return (
    <div className="input-group mb-3 sasb-shadow">
      <select className="form-select">
        <option selected>{selected}</option>
        {options?.map((option, index) => {
          return <option value={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownFilter;
