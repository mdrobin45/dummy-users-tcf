const SearchForm = ({ handleSearchForm, handleSortBy }) => {
   return (
      <form className="mb-4 w-2/4 mx-auto">
         <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
         </label>
         <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
               </svg>
            </div>
            <div className="flex items-center gap-2">
               <input
                  onChange={handleSearchForm}
                  type="search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-primary focus:border-primary "
                  placeholder="Search users by username"
                  required
               />
               <select
                  onChange={handleSortBy}
                  id="countries"
                  className="bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block p-4 ">
                  <option value="none" selected>
                     Sort By
                  </option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="company">Company</option>
               </select>
            </div>
         </div>
      </form>
   );
};

export default SearchForm;
