import Dropdown from "./Dropdown";
const FilterSection = () => {
  const genderDropdown = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Clear", value: "clearGender" },
  ];
  const reviewDropDown = [
    { label: "Highest", value: "reviews" },
    { label: "clear", value: "clearReviews" },
  ];
  const expDropDown = [
    { label: "0-5 Years", value: "0_5" },
    { label: "5-10 Years", value: "5_10" },
    { label: "10+ Years", value: "11" },
    { label: "clear", value: "clearExp" },
  ];
  const AllFilter = [
    { label: "Fees", value: "fee" },
    { label: "Availability", value: "avl" },
    { label: "Clear", value: "clearFilters" },
  ];
  return (
    <div className="bg-hero-bg text-white bg-blue-800 py-4 mt-5">
      <div className="max-w-7xl  mx-5 xl:mx-auto">
        <div className="flex flex-wrap items-start gap-4">

          <Dropdown items={genderDropdown} name="Gender" />
          <Dropdown items={reviewDropDown} name="Reviews" />
          <Dropdown items={expDropDown} name="Experience" />

          <div className="flex items-center gap-2 lg:ml-auto">
            <p>Sort by :</p> <Dropdown items={AllFilter} name="Filters" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
