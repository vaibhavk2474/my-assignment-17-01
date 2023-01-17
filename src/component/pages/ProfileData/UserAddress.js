import React from "react";

const lat = 26.940482277094915;
const long = 75.77255969821864;
function UserAddress({ address }) {
  return (
    <div className="ml-8 h-full">
      <div className="user-address h-2/6">
        <span className=" text-[#9C9C9C]">Address:</span>
        <div className="ml-4 mt-2 mb-2 flex">
          <div className="m-1 text-right text-[#9C9C9C]">
            <div>Street : </div>
            <div>Suite : </div>
            <div>City : </div>
            <div>Zipcode : </div>
          </div>
          <div className="m-1">
            <div>{address.street}</div>
            <div>{address.suite}</div>
            <div>{address.city}</div>
            <div>{address.zipcode}</div>
          </div>
        </div>
      </div>
      <div className="user-location ml-4 mt-2 h-3/6">
        {/* having no api key */}
        <iframe
          className="w-full h-full"
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.8439279126133!2d75.77148145025564!3d26.940161865311342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3bd66223f0d%3A0x44d7dabd427c8c9a!2sChomu%20Pulia%20Cir%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1673942469349!5m2!1sen!2sin"
          //   width="320"
          //   height="320"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex justify-end m-1">
          <div>
            <span className="text-[#9C9C9C]">Lat:</span>
            <span>{lat.toFixed(2)}</span>
          </div>
          <div className="ml-4">
            <span className="text-[#9C9C9C]">Long:</span>
            <span>{long.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
