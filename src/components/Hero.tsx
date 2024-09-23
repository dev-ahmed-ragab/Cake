import Button from '@/app/element/Button';
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url(https://websitedemos.net/sweet-shop-04/wp-content/uploads/sites/101/2020/02/sweets.jpg)] bg-cover bg-center bg-repeat text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Love At First Bite </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Per veritatis sequi, exercitationem porta itaque fermentum in,
            repellat ratione.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
