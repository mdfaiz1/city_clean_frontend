import React from "react";

function Reports() {
  return (
    <div className="border-2 border-red-700">
      <div className="container mx-auto pt-3 overflow-hidden border-2 border-black">
        <div class="bg-white border-2 border-red-600">
          <div class="  px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">
              All Reports
            </h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class="group relative">
                <img
                  src="https://media.gettyimages.com/id/1173807291/photo/rubbish-pollution-on-city-street.jpg?s=612x612&w=gi&k=20&c=RdnTnT9jtDfziWfKpASIQQVszlBN7eCipCmyuyTqk7I="
                  alt="Image"
                  class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        morabadi , near DSPMU , ranchi, JHarkhand
                      </a>
                    </h3>
                    <div className="flex items-center justify-between">
                      <p class="mt-1 text-sm text-gray-500">
                        Reported By - Faiz
                      </p>
                      <p class="text-sm font-medium text-gray-900">
                        27 Jan, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- More products... --> */}

              {/* <!-- More products... --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
