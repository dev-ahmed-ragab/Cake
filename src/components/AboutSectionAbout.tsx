import React from 'react';

const AboutSectionAbout = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col  items-center">
          <div className="mx-auto max-w-lg text-center pb-24 lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Story</h2>

            <p className="mt-4 text-gray-600">
              You can use this section to display few features or services
              through an info circle. Introduce the section here and list the
              features or services as info circle items.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 w-[100%] ">
            <a href="#" className="block">
              <img
                alt=""
                src="https://websitedemos.net/cake-shop-04/wp-content/uploads/sites/537/2020/03/about-01-free-img.jpg"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                About Us
              </h3>

              <p className="mt-2 max-w-sm text-gray-700">
                Hey there, I'm Fiona Cornelis, a French baker from Brussels,
                Belgium. I own my own bakery where I lorem ipsum dolor sit amet.
                Proin semper pellentesque sapien sit amet pretium phasellus sit.
              </p>
            </a>

            <a href="#" className="block">
              <img
                alt=""
                src="https://websitedemos.net/fiona-patisserie-04/wp-content/uploads/sites/1136/2022/11/about-02.jpg"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
              </h3>

              <p className="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionAbout;
