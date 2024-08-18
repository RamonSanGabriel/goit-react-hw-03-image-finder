import { FaSearch } from 'react-icons/fa';

export const Searchbar = () => {
  return (
    <header>
      <form>
        <button type="submit">
          <FaSearch />
        </button>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};
