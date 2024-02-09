import Container from "../../Components/Container/Container";
import UserCard from "../../Components/UserCard/UserCard";

const Home = () => {
   return (
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
         </div>
      </Container>
   );
};

export default Home;
