import React from "react";

function CompanyDetails({ company }) {
  return (
    <div className="p-2">
      <div className="text-center text-[#9C9C9C] ">Company</div>
      <div className="flex">
        <div className="text-right text-[#9C9C9C] w-2/4">
          <div className="m-1">Name : </div>
          <div className="m-1 ">catchPhrase : </div>
          <div className="m-1 ">bs : </div>
        </div>
        <div className="w-2/4">
          <div className="m-1">{company.name}</div>
          <div className="m-1">{company.catchPhrase}</div>
          <div className="m-1">{company.bs}</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
