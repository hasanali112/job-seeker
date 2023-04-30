import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-container'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          
              <span className='relative'>Some Question</span>
          
          </h2>
          
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto'>
        <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What is context API?
              </p>
              <p className='text-gray-700'>
              Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.
                
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What is custom hook in react?
              </p>
              <p className='text-gray-700'>
              Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
              </p>
            </div>
           
          </div>
          <div className='space-y-8'>
          <div>
              <p className='mb-4 text-xl font-medium'>
              What is useref in react?
              </p>
              <p className='text-gray-700'>
              The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument ( initialValue ).
              </p>
            </div>
            <div>
              <p className='mb-4 text-xl font-medium'>
              What is usememo in react?
              </p>
              <p className='text-gray-700'>
              useMemo is a hook that is used in the functional component of React that returns a memoized value.
              </p>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Blog;