
import Date from "./extra/DateBn";

const Navbar = () => {
  return (
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-2">
          <div className=" bg-[#05893E] h-10 w-10 rounded-lg flex items-center justify-center text-2xl">
            🛒
          </div>
          <div>
            <div className="font-bold text-xl">বাজার দর</div>
            <div className="text-gray-500 text-[12px]">
              <Date></Date>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn-ghost text-sm">সাইন ইন</button>
          <button className="btn btn-success bg-[#05893E] text-white text-sm">
            সাইন আপ
          </button>
        </div>
      </div>
  );
};

export default Navbar;
