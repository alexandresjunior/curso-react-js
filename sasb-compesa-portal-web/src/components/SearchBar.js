import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setBusca, placeholder, shadow = true }) => {
  return (
    <div className={`input-group mb-3 ${shadow && `sasb-shadow`}`}>
      <input
        type="text"
        className="form-control border border-secondary border-end-0 shadow-none"
        placeholder={placeholder}
        onChange={(event) => {
          setBusca(event.target.value);
        }}
      />
      <button
        className="btn border border-secondary bg-white border-start-0"
        type="button"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
