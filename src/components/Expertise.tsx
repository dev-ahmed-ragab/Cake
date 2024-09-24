import React from 'react';

const Expertise = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="#" className="group block">
              <div className=" h-[50px] sm:h-[80px]">
                <img
                  src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/icon-03-free-img.png"
                  alt=""
                  className="h-[100%] object-cover "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-3xl  text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Tarts
                </h3>

                <p className="mt-1.5 text-pretty text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quibusdam ab maiores placeat odio id?
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <div className=" h-[50px] sm:h-[80px]">
                <img
                  src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/icon-02-free-img.png"
                  alt=""
                  className="h-[100%] object-cover "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-3xl  text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Tarts
                </h3>

                <p className="mt-1.5 text-pretty text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quibusdam ab maiores placeat odio id?
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <div className=" h-[50px] sm:h-[80px]">
                <img
                  src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/icon-01-free-img.png"
                  alt=""
                  className="h-[100%] object-cover "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-3xl  text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Tarts
                </h3>

                <p className="mt-1.5 text-pretty text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  quibusdam ab maiores placeat odio id?
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Expertise;
