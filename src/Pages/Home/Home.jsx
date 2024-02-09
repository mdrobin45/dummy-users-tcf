import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../Components/Container/Container";
import UserCard from "../../Components/UserCard/UserCard";

const Home = () => {
   const { isPending, data } = useQuery({
      queryKey: ["users"],
      queryFn: () => axios.get("https://dummyjson.com/users"),
   });

   return (
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-20">
            {!isPending ? (
               <>
                  {data?.data?.users.map((item) => (
                     <UserCard key={item.id} user={item} />
                  ))}
               </>
            ) : (
               <p>Loading</p>
            )}
         </div>
      </Container>
   );
};

export default Home;
