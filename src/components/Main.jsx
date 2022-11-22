import React from "react";

const Main = () => {
  return (
    <div className="text-center dark:text-white">
      <h1 class="text-center mt-[200px] dark:text-white text-7xl font-[karla] font-bold">
        Music Class for all Ages
      </h1>
      <span>
        <button
          type="button"
          class="text-center mt-[100px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Learn more
        </button>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          View Courses
        </button>
      </span>

      <h2 className="mt-10 font-[karla] font-medium text-3xl">
        Taught by Professionals
      </h2>
      <span className="flex just justify-center gap-[7.5rem] mt-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                Monica Bhatia
              </h5>
            </a>
            <hr />
            <p class="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>

        {/* second card*/}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                Priytam Pratihar
              </h5>
            </a>
            <hr />
            <p class="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Main;
