const DropdownFilter = ({ options }) => {
  return (
    <div className="input-group mb-3 sasb-shadow">
      <select className="form-select shadow-none">
        {options?.map((option, index) => {
          return <option value={index} key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownFilter;
