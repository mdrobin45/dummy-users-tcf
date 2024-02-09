import { FaBuilding, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserCard = ({ user }) => {
   return (
      <section className="flex gap-3 shadow border rounded-md p-3">
         <div className="flex flex-col items-center justify-center">
            <img
               className="w-[60px] border p-2 rounded-full"
               src={user?.image}
               alt="Avatar"
            />
            <Link to={`/${user?.id}`} className="text-sm text-primary">
               View Profile
            </Link>
         </div>
         <div>
            <h2 className="text-xl font-bold">
               {user?.firstName + " " + user?.lastName}
            </h2>
            <div className="flex items-center gap-2">
               <FaEnvelope className="text-primary" />
               <p className="text-gray-500">{user?.email}</p>
            </div>
            <div className="flex items-center gap-2">
               <FaMapMarkerAlt className="text-primary" />
               <p className="text-gray-500">
                  {user?.address.address +
                     ", " +
                     user?.address.city +
                     ", " +
                     user?.address.state}
               </p>
            </div>
            <div className="flex items-center gap-2">
               <FaBuilding className="text-primary" />
               <p className="text-gray-500">{user?.company.name}</p>
            </div>
         </div>
      </section>
   );
};

export default UserCard;
