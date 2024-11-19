import React from "react";
import bannerImg from "../../assets/banner.png";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:py-16 py-10 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-4xl text-2xl font-medium mb-7">
          New Release This Week
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          nihil ullam recusandae nostrum commodi qui quae. Quaerat aperiam
          mollitia ducimus qui dignissimos repudiandae quia. Eaque beatae ipsam
          minima! Consequuntur, tempora. Totam, blanditiis.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}

export default Banner;
