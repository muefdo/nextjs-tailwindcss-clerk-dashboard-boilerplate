import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Can Meral',
      avatar:
        'https://media.licdn.com/dms/image/D4D03AQFQM7uKYxJ9LQ/profile-displayphoto-shrink_200_200/0/1681824258474?e=1711584000&v=beta&t=jEcLeWmoTlJA8lfnqtcLj3GV8SRtl4--CptveWLdZ1o',
      pos: 'Co-Founder of HyperMonk Games',
      quote:
        'It was a very nice solution for us, and it became an unforgettable project for Efe as well. Well done Murat Efe Doğan, I wish you continued success.',
    },
    // {
    //   id: 2,
    //   name: 'Özerk Işık',
    //   avatar:
    //     'https://media.licdn.com/dms/image/C5603AQGsXrvAHEItDg/profile-displayphoto-shrink_200_200/0/1517354399784?e=1711584000&v=beta&t=922VNtsHEfdInv2hjo0EaLNge6ZWEhKsxADah5y4b94',
    //   pos: 'CEO of CraftCon',

    //   quote:
    //     'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.',
    // },
    // {
    //   id: 3,
    //   name: 'Nur Banu Gülle',
    //   avatar:
    //     'https://msgrupproje.com.tr/wp-content/uploads/elementor/thumbs/cropped-Adsiz-tasarim-2-qc9mi3br11n7is0ieudvnl1oosx9h30gs2mio0zvbs.png',
    //   pos: 'Head Architect of MsGroup',

    //   quote:
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.',
    // },
  ];

  return (
    <div className=' flex items-center justify-center py-5 font-mont'>
      <div className='w-full  x-5 py-16 md:py-24 text-gray-800'>
        <div className='w-full max-w-6xl mx-auto'>
          <div className='text-center max-w-xl mx-auto'>
            <h1 className='text-3xl md:text-5xl font-bold mb-5 text-gray-600'>
              What people are saying.
            </h1>
            <h3
              className='text-lg mb-5 font-light'
              style={{ fontFamily: 'Mont-Light' }}
            >
              Words from our Clients
            </h3>
            <div className='text-center mb-10'>
              <span className='inline-block w-1 h-1 rounded-full bg-[#4db0e2] ml-1'></span>
              <span className='inline-block w-3 h-1 rounded-full bg-[#4db0e2] ml-1'></span>
              <span className='inline-block w-40 h-1 rounded-full bg-[#4db0e2]'></span>
              <span className='inline-block w-3 h-1 rounded-full bg-[#4db0e2] ml-1'></span>
              <span className='inline-block w-1 h-1 rounded-full bg-[#4db0e2] ml-1'></span>
            </div>
          </div>
          {/* md:flex */}
          <div className='-mx-3 flex  items-start z-50'>
            {testimonialsData.map((testimonial) => (
              // md:w-1/3
              <div key={testimonial.id} className='px-3 w-full mx-5'>
                <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6'>
                  <div className='w-full flex mb-4 items-center'>
                    {/* <div className='overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200'>
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div> */}
                    <div className='flex-grow pl-3'>
                      <h6 className='font-bold text-xs md:text-sm uppercase text-gray-600'>
                        {testimonial.name}
                      </h6>
                      <p>
                        <span className='text-xs md:text-sm text-gray-400 italic'>
                          {testimonial.pos}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className='text-md md:text-lg leading-tight'>
                      <span className='text-xl leading-none italic font-bold text-gray-400 mr-1'>
                        &quot;
                      </span>
                      <span style={{ fontFamily: 'Mont-Light' }}>
                        {testimonial.quote}
                      </span>
                      <span className='text-xl leading-none italic font-bold text-gray-400 ml-1'>
                        &quot;
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
