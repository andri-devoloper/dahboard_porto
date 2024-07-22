import { FaMoneyCheckDollar, FaUsers } from "react-icons/fa6";

const Box: React.FC = () => {
  return (
    <div className="grid grid-row-1 md:grid-cols-2 gap-4 mt-3 justify-center items-center">
      <div className="bg-white w-full rounded-lg p-4 shadow-md flex items-center">
        <div className="border-l-4 border-blue-500 pl-3">
          <h3 className="text-gray-500">Customers</h3>
          <p className="text-2xl font-bold">1,456</p>
          <p className="text-green-500 mt-1 flex items-center">
            <span className="mr-1">▲</span>+6.5% Since last week
          </p>
        </div> 
        <div className="ml-auto ">
          <FaUsers className="text-blue-500 w-10 h-14 rounded-md bg-blue-100 p-2" />
        </div>
      </div>
      <div className="bg-white w-full rounded-lg p-4 shadow-md flex items-center">
        <div className="border-l-4  border-teal-500 pl-3">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">$3,345</p>
          <p className="text-red-500 mt-1 flex items-center">
            <span className="mr-1">▼</span>-0.10% Since last week
          </p>
        </div>
        <div className="ml-auto">
          <FaMoneyCheckDollar className="text-teal-500 w-10 h-14 bg-teal-100 p-2 rounded-md" />
        </div>
      </div>
      <div className="bg-white w-full rounded-lg p-4 shadow-md flex items-center">
        <div className="border-l-4 border-blue-500 pl-3">
          <h3 className="text-gray-500">Customers</h3>
          <p className="text-2xl font-bold">1,456</p>
          <p className="text-green-500 mt-1 flex items-center">
            <span className="mr-1">▲</span>+6.5% Since last week
          </p>
        </div>
        <div className="ml-auto">
          <FaUsers className="text-blue-500 w-10 h-14 bg-blue-100 p-2 rounded-md" />
        </div>
      </div>
      <div className="bg-white w-full rounded-lg p-4 shadow-md flex items-center">
        <div className="border-l-4 border-blue-500 pl-3">
          <h3 className="text-gray-500">Customers</h3>
          <p className="text-2xl font-bold">1,456</p>
          <p className="text-green-500 mt-1 flex items-center">
            <span className="mr-1">▲</span>+6.5% Since last week
          </p>
        </div>
        <div className="ml-auto">
          <FaUsers className="text-blue-500 w-10 h-14 bg-blue-100 p-2 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Box;
