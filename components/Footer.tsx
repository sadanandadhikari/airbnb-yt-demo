import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600">
      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals Accepted</p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">HOST</h5>
        <p>Looking to Host ?</p>
        <p>Search no further</p>
        <p>Check us out</p>
        <p>Policies and Guidelines</p>
      </div>

      <div className="space-y-4 text-xs text-white">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust and Safety</p>
        <p>Say Hi on Social Media</p>
        <p>Easter eggs for the win</p>
      </div>
    </div>
  );
}

export default Footer;
