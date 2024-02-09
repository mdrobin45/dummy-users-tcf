import { FaBuilding, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserCard = () => {
   return (
      <section className="flex gap-3 shadow border rounded-md p-4">
         <div className="flex flex-col items-center justify-center">
            <img
               className=" w-[60px] border p-3 rounded-full"
               src="https://robohash.org/Terry.png?set=set4"
               alt="Avatar"
            />
            <Link to="/" className="text-sm text-primary">
               View Profile
            </Link>
         </div>
         <div>
            <h2 className="text-xl font-bold">Robin Rana</h2>
            <p className="flex items-center gap-2">
               <FaEnvelope className="text-primary" />
               <p className="text-gray-500">robin@gmial.com</p>
            </p>
            <p className="flex items-center gap-2">
               <FaMapMarkerAlt className="text-primary" />
               <p className="text-gray-500">Kaliakiari, Gaipur, Dhaka</p>
            </p>
            <p className="flex items-center gap-2">
               <FaBuilding className="text-primary" />
               <p className="text-gray-500">Techno Fix</p>
            </p>
         </div>
      </section>
   );
};

export default UserCard;
