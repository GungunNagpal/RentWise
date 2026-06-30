import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="max-w-6xl mx-auto -mt-14 relative z-20">

      <div className="bg-white rounded-2xl shadow-2xl p-8">

        <div className="grid grid-cols-5 gap-5">

          <input
            type="text"
            placeholder="City"
            className="border rounded-lg p-4 outline-none"
          />

          <select className="border rounded-lg p-4">

            <option>BHK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>

          </select>

          <input
            type="number"
            placeholder="Maximum Rent"
            className="border rounded-lg p-4 outline-none"
          />

          <select className="border rounded-lg p-4">

            <option>Furnished</option>

            <option>Yes</option>

            <option>No</option>

          </select>

          <button className="bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">

            <Search size={20} />

            Search

          </button>

        </div>

      </div>

    </div>
  );
};

export default SearchBar;