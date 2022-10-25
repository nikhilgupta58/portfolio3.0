import React from "react";

export default function Map() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          width="100%"
          scrolling="no"
          src="https://maps.google.com/maps?width=667&amp;height=757&amp;hl=en&amp;q=Dehradun&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://piratebay-proxys.com/">Pirate proxy</a>
      </div>
    </div>
  );
}
