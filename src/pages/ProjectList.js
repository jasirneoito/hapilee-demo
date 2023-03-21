import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import moment from "moment";

export default function ProjectList() {
  const [projectData, setProjectData] = useState([]);
  const token = localStorage.getItem("token");

  console.log(projectData);

  const fetchProjects = async () => {
    const url = "https://devapi.happilee.io/api/v1/listProjects?type=undefined";
    const headers = token
      ? {
          authorization: `Bearer ${token}`,
        }
      : {};

    try {
      const response = await axios.get(url, { headers });
      if (response) setProjectData(response?.data?.data);
      return response.data;
    } catch (error) {
      const status = error.response ? error.response.status : null;

      if (status === 401) {
        throw new Error("Unauthorized");
      } else if (status === 404) {
        throw new Error("Not found");
      } else {
        throw new Error("Unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="px-24 py-20  bg-[#F5F5F5] w-full h-full ">
      <div className="p-10 bg-[#FFFFFF] w-6/8 h-content flex rounded-lg">
        <div className="flex h-full mt-8 flex-column justify-content-center">
          <div>
            <h2 className="font-semibold text-4xl">Create New Project</h2>
            <p className="text-gray-600 font-normal text-base mt-4">
              Sed lacinia erat nec lorem viverra, sit amet scelerisque elit
              dignissim. Integer tincidunt lectus in erat venenatis, sit amet
              accumsan nulla sollicitudin.
            </p>
            <button className="w-48 mt-4 h-8 bg-[#199cd9] shadow-none text-white font-bold text-xs rounded-full ">
              Create
            </button>
          </div>
        </div>
        <div className="flex h-full justify-center items-center">
          <svg
            width="467"
            height="274"
            viewBox="0 0 467 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M275.945 247.726H178.539V79.8936H275.945V247.726Z"
              fill="white"
            />
            <path
              d="M160.596 234.491C160.596 238.454 157.36 241.69 153.397 241.69C149.397 241.69 146.161 238.454 146.161 234.491C146.161 230.492 149.397 227.256 153.397 227.256C157.36 227.256 160.596 230.492 160.596 234.491Z"
              stroke="#070924"
              stroke-width="0.933272"
            />
            <path
              d="M219.371 73.167H234.096"
              stroke="#070924"
              stroke-width="0.933272"
            />
            <path
              d="M284.799 120.47H214.553C213.099 120.47 211.935 119.27 211.935 117.852V100.654C211.935 99.236 213.099 98.0361 214.553 98.0361H284.799C286.253 98.0361 287.416 99.236 287.416 100.654V117.852C287.416 119.27 286.253 120.47 284.799 120.47Z"
              fill="#383C41"
            />
            <path
              d="M283.417 114.325L272.073 125.233V114.471L283.417 114.325Z"
              fill="#383C41"
            />
            <path
              d="M220.734 104.908H279.018"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M220.734 113.598H253.021"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M220.734 109.271H237.678"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M243.095 109.271H259.311"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M263.092 109.271H266.837"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M158.288 153.92V136.722C158.288 135.304 159.451 134.104 160.906 134.104H231.151C232.605 134.104 233.769 135.304 233.769 136.722V153.92C233.769 155.338 232.605 156.538 231.151 156.538H160.906C159.451 156.538 158.288 155.338 158.288 153.92Z"
              fill="#4CB8EA"
            />
            <path
              d="M173.632 150.538V161.3L162.288 150.393L173.632 150.538Z"
              fill="#4CB8EA"
            />
            <path
              d="M167.087 140.977H225.37"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M167.087 149.666H199.374"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M167.087 145.339H184.03"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M189.448 145.339H205.664"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M209.445 145.339H213.19"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M291.379 191.879H221.134C219.68 191.879 218.516 190.715 218.516 189.261V172.099C218.516 170.645 219.68 169.481 221.134 169.481H291.379C292.834 169.481 293.997 170.645 293.997 172.099V189.261C293.997 190.715 292.834 191.879 291.379 191.879Z"
              fill="#383C41"
            />
            <path
              d="M289.998 185.771L278.654 196.678V185.916L289.998 185.771Z"
              fill="#383C41"
            />
            <path
              d="M227.315 176.353H285.598"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M227.315 185.043H259.602"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M227.315 180.68H244.258"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M249.676 180.68H265.892"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M269.673 180.68H273.418"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M189.284 224.638V207.476C189.284 206.022 190.447 204.858 191.902 204.858H262.147C263.602 204.858 264.765 206.022 264.765 207.476V224.638C264.765 226.092 263.602 227.255 262.147 227.255H191.902C190.447 227.255 189.284 226.092 189.284 224.638Z"
              fill="#4CB8EA"
            />
            <path
              d="M204.628 221.292V232.018L193.284 221.146L204.628 221.292Z"
              fill="#4CB8EA"
            />
            <path
              d="M198.083 211.693H256.366"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M198.083 220.42H230.37"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M198.083 216.057H215.026"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M220.444 216.057H236.66"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M240.441 216.057H244.186"
              stroke="white"
              stroke-width="0.806007"
            />
            <path
              d="M96.2227 117.743C96.2227 119.779 94.5501 121.451 92.514 121.451C90.4779 121.451 88.8418 119.779 88.8418 117.743C88.8418 115.706 90.4779 114.07 92.514 114.07C94.5501 114.07 96.2227 115.706 96.2227 117.743Z"
              stroke="black"
              stroke-width="1.27264"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M299.723 50.6237C299.723 52.6597 298.087 54.2959 296.051 54.2959C294.015 54.2959 292.343 52.6597 292.343 50.6237C292.343 48.5876 294.015 46.915 296.051 46.915C298.087 46.915 299.723 48.5876 299.723 50.6237Z"
              stroke="black"
              stroke-width="1.27264"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M115.457 0.740234H151.997"
              stroke="#FBFAFF"
              stroke-width="1.27264"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M173.994 38.9164V48.8424C173.994 49.7514 173.303 50.4786 172.394 50.4786L168.031 50.5513V54.6235L162.068 50.3331H154.978C154.106 50.3331 153.379 49.6059 153.379 48.697V38.9164C153.379 38.0075 154.106 37.2803 154.978 37.2803H172.394C173.267 37.2803 173.994 38.0075 173.994 38.9164V38.9164Z"
              stroke="black"
              stroke-width="1.27264"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M381.458 206.094H375.968V200.531H381.458V206.094Z"
              stroke="black"
              stroke-width="1.27264"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M188.974 15.0646C188.974 16.7735 187.556 18.1914 185.811 18.1914C184.102 18.1914 182.684 16.7735 182.684 15.0646C182.684 13.3194 184.102 11.9014 185.811 11.9014C187.556 11.9014 188.974 13.3194 188.974 15.0646Z"
              fill="#95C4DA"
            />
            <path
              d="M117.929 92.7267H87.642C86.7694 92.7267 86.0786 92.0359 86.0786 91.1633C86.0786 90.2907 86.7694 89.5635 87.642 89.5635H117.929C118.802 89.5635 119.529 90.2543 119.529 91.1269C119.529 91.9995 118.802 92.7267 117.929 92.7267Z"
              fill="#95C4DA"
            />
            <path
              d="M371.023 162.862L357.789 162.899C356.916 162.899 356.225 162.172 356.189 161.299C356.189 160.426 356.916 159.736 357.789 159.736L371.023 159.699C371.896 159.699 372.623 160.426 372.623 161.299C372.623 162.172 371.896 162.862 371.023 162.862Z"
              fill="#95C4DA"
            />
            <path
              d="M347.863 14.8462L299.069 15.0643C298.196 15.0643 297.469 14.3735 297.469 13.5009C297.469 12.6283 298.16 11.9011 299.033 11.9011L347.826 11.6829C348.699 11.6466 349.39 12.3738 349.426 13.2464C349.426 14.119 348.735 14.8098 347.863 14.8462Z"
              fill="#95C4DA"
            />
          </svg>
        </div>
      </div>
      <h5 class="mt-6 not-italic font-normal text-xl">Recent Projects</h5>
      <div className="w-6/8 bg-[#F5F5F5] h-fit mt-4 flex grid-cols-3 gap-6">
        {projectData?.map((item: any) => (
          <div className="bg-[#FFFFFF]  w-20 h-44 w-80 rounded-lg ">
            <div className="p-4">
              <div className="h-full">
                <div className="flex w-full justify-between   ">
                  <div className="flex items-center">
                    <h3 className="text-base capitalize font-semibold">
                      {item.project_name}
                    </h3>
                    <button
                      className="w-14 px-1 ml-2 rounded-xl h-6 text-[#1AC45C] capitalize font-semibold text-xs bg-[#E8F3EC]
]"
                    >
                      {item.status}
                    </button>
                  </div>
                  <div>
                    <svg
                      width="4"
                      height="19"
                      viewBox="0 0 4 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.0744 0.740234C1.2494 0.740234 0.574402 1.41523 0.574402 2.24023C0.574402 3.06523 1.2494 3.74023 2.0744 3.74023C2.8994 3.74023 3.5744 3.06523 3.5744 2.24023C3.5744 1.41523 2.8994 0.740234 2.0744 0.740234ZM2.0744 15.7402C1.2494 15.7402 0.574402 16.4152 0.574402 17.2402C0.574402 18.0652 1.2494 18.7402 2.0744 18.7402C2.8994 18.7402 3.5744 18.0652 3.5744 17.2402C3.5744 16.4152 2.8994 15.7402 2.0744 15.7402ZM2.0744 8.24023C1.2494 8.24023 0.574402 8.91523 0.574402 9.74023C0.574402 10.5652 1.2494 11.2402 2.0744 11.2402C2.8994 11.2402 3.5744 10.5652 3.5744 9.74023C3.5744 8.91523 2.8994 8.24023 2.0744 8.24023Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" w-5/6 text-gray-600 font-normal text-xs">
                  <span className="flex w-full justify-between mt-2">
                    <p className="w-1/2">Created on :</p>
                    <p className="w-1/2 uppercase">
                      :{" "}
                      {moment(item.project_creation_time).format(
                        " DD MMM YYYY"
                      )}
                    </p>
                  </span>
                  <span className="flex w-full justify-between mt-2">
                    <p className="w-1/2">Plan </p>
                    <p className="w-1/2 capitalize text-[#6A737D] not-italic font-bold text-xs">
                      : {item.package_name}
                    </p>
                  </span>
                  <span className="flex w-full justify-between mt-2">
                    <p className="w-1/2">Category </p>
                    <p className="w-1/2 not-italic font-bold text-xs text-[#6A737D]">
                      : {item.category}
                    </p>
                  </span>
                </div>
                <button className=" w-1/4 mt-6 text-[#199CD9] border-[#199CD9] rounded-xl border hover:bg-[#199CD9] hover:text-[#fff] mt-3 ">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
