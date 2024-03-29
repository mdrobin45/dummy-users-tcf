import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProfile = () => {
   const { id } = useParams();

   const { isPending, data } = useQuery({
      queryKey: ["singleUsers"],
      queryFn: () => axios.get(`https://dummyjson.com/users/${id}`),
   });
   const userData = data?.data;
   console.log(userData);
   return (
      <section className="flex flex-col items-center justify-center h-screen">
         {!isPending ? (
            <div className="bg-white mx-6 lg:w-2/4 lg:mx-auto my-20 overflow-hidden shadow rounded-lg border">
               <div className="flex items-center justify-between">
                  <div className="px-4 py-5 sm:px-6">
                     <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                     </h3>
                     <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about user.
                     </p>
                  </div>
                  <div className="px-4">
                     <img
                        className="w-10 md:w-20 h-10 md:h-20 rounded-full border"
                        src={userData?.image}
                        alt="User"
                     />
                  </div>
               </div>
               <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                     <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                           Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {userData?.firstName + " " + userData?.lastName}
                        </dd>
                     </div>
                     <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                           Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {userData?.email}
                        </dd>
                     </div>
                     <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                           Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                           {userData?.address.address +
                              ", " +
                              userData?.address.city +
                              ", " +
                              userData?.address.state}
                        </dd>
                     </div>
                     <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                           Company Name
                        </dt>
                        <dd>{userData?.company.name}</dd>
                     </div>
                  </dl>
               </div>
            </div>
         ) : (
            <p>Loading</p>
         )}
      </section>
   );
};

export default SingleProfile;
