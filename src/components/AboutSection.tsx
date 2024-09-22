import React from 'react';

const AboutSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-0 sm:px-6 sm:py-0 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://websitedemos.net/sweet-shop-04/wp-content/uploads/sites/101/2020/02/bread-breakfast.jpg"
              className="absolute inset-0 h-full right-1/2 object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                  alias doloribus impedit.
                </h2>
              </div>

              <p>
                Asperiores amet dapibus tempore, ultrices massa. Leo viverra
                netus laceat, quis aliquet, ducimus bibendum ante id duis
                delectus tenetur porta, quos. Dolor tortor mauris! Sociis
                egestas fames. Placeat, sociis tempore, dis
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
