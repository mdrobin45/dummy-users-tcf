import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import UserCard from "../../Components/UserCard/UserCard";
import SearchForm from "./SearchForm/SearchForm";

const Home = () => {
   const [searchText, setSearchText] = useState("");
   const [displayUsers, setDisplayUsers] = useState([]);

   const { isPending, data } = useQuery({
      queryKey: ["users"],
      queryFn: () => axios.get("https://dummyjson.com/users"),
   });

   // Search form text
   const handleSearchForm = (e) => {
      e.preventDefault();
      setSearchText(e.target.value);
   };

   // Filter user by search text
   useEffect(() => {
      if (!isPending) {
         const filteredUsers =
            data?.data?.users.filter((item) =>
               item.firstName.toLowerCase().includes(searchText)
            ) || [];

         if (filteredUsers.length !== 0) {
            setDisplayUsers(filteredUsers);
         } else {
            setDisplayUsers(data?.data?.users);
         }
      }
   }, [data, isPending, searchText]);

   return (
      <Container>
         <section className="my-20">
            <SearchForm handleSearchForm={handleSearchForm} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
               {!isPending ? (
                  <>
                     {displayUsers.map((item) => (
                        <UserCard key={item.id} user={item} />
                     ))}
                  </>
               ) : (
                  <p>Loading</p>
               )}
            </div>
         </section>
      </Container>
   );
};

export default Home;
