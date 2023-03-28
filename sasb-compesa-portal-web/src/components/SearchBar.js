import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ setBusca }) => {
  return (
    <div className="input-group mb-3 sasb-shadow">
      <input
        type="text"
        className="form-control border border-secondary border-end-0 shadow-none"
        placeholder="Digite o nome da barragem"
        onChange={(event) => {
          setBusca(event.target.value)
        }}
      />
      <button
        className="btn border border-secondary bg-white border-start-0"
        type="button">
        <FaSearch />
      </button>
    </div>


  );
};

export default SearchBar;
