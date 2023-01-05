import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ChangeInfo.module.scss";
//import { useNavigate } from "react-router-dom";
import { DriverManage } from "src/api/services/getDataAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Manage() {
  //const [change, setChange] = useState(false);
  const [dropbox, setDropbox] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    DriverManage()
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <form>
        <div className="flex items-center	text-center justify-center	">
          <h1 className="my-8 text-center text-5xl leading-[50px] font-extrabold text-gray-900 dark:text-white mr-2">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              QUẢN LÝ
            </span>{" "}
            XE CHO THUÊ
          </h1>
          <img
            alt=""
            className="w-[200px]"
            src="https://img.freepik.com/premium-vector/car-salesman-cartoon_24877-6481.jpg"
          />
        </div>
        <div className="flex  justify-around my-8">
          <div className="relative w-[50%]">
            <div className="absolute inset-y-0 left-[10px] flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nhập số điện thoại"
              required=""
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              TÌM KIẾM
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <img
              className="p-1 w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTJ9GUK5C1XOvoyHQ8U8FSZEwPmgorjhMBA&usqp=CAU"
              alt=""
            />
            <div className="font-medium dark:text-white">
              <div>Mr. Hung</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                06/12/1995
              </div>
            </div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Đăng xuất
            </button>
          </div>
        </div>
      </form>

      <div className={cx("body")}>
        <div className="flex relative top-10">
          <a
            href={" "}
            className="w-[450px] flex items-center bg-white border rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://img.freepik.com/premium-vector/flat-cartoon-hipster-man-character-empty-background-time-management-business-vector-illustration-concept_189557-2184.jpg?w=2000"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#4f46e5] dark:text-white">
                Xe cho thuê
              </h5>
              <p className="mb-3 font-normal text-[#0ea5e9] dark:text-gray-400">
                Số lượng: {data.length}
              </p>
            </div>
          </a>
          <a
            href={" "}
            className="w-[450px] mx-6  flex items-center bg-white border rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://thumbs.dreamstime.com/b/woman-standing-behind-red-car-showing-paper-document-car-insurance-concept-cartoon-vector-illustration-woman-standing-108499740.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#16a34a] dark:text-white">
                Đang hoạt động
              </h5>
              <p className="mb-3 font-normal text-[#0ea5e9] dark:text-gray-400">
                Số lượng: 1
              </p>
            </div>
          </a>
          <a
            href={" "}
            className="w-[450px] flex items-center bg-white border rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://img.freepik.com/premium-vector/illustration-cartoon-chereful-young-man-driving-red-car-road_253349-1319.jpg?w=2000"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#be185d] dark:text-white">
                Đang nghỉ
              </h5>
              <p className="mb-3 font-normal text-[#0ea5e9] dark:text-gray-400">
                Số lượng: 4
              </p>
            </div>
          </a>
        </div>
        <div className="flex flex-col w-[1400px] h-[800px] bg-white mt-20 pb-20">
          <div className="text-xl right-0 w-[96%] h-24  flex flex-col items-end mr-10">
            <button
              className="absolute w-[280px] h-12  flex flex-row justify-between items-center border-[0.5px] border-solid border-black rounded-[5px] hover:border-solid hover:border-blue-600 hover:border-[1px]"
              onClick={() => setDropbox(!dropbox)}>
              <p className="ml-2">- Chọn mã tài xế -</p>
              <FontAwesomeIcon icon={faCaretUp} className="mr-2" />
            </button>
            {dropbox && (
              <div className="absolute z-10 mt-12 w-[280px] bg-white-100 min-h-[20px] border-[0.5px] divide-solid divide-black">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-8 bg-white cursor-pointer  ">
                    Ma tai xe : {item.iddriver}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="absolute w-20 h-[700px] bg-red-400 mt-20 mb-10"></div>
        </div>
        {/*
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Họ và Tên
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Số điện thoại
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Loại xe
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Biển số
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Ngày bắt đầu thuê
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Loại hình thuê
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Trạng thái
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length &&
                      data.map((item, index) => (
                        <tr key={index} className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.car}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.platenumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.rentdate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.renttype}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.state}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button
                              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                              onClick={routeChange}>
                              Kiểm tra
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button
                              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                              onClick={() => setChange(true)}>
                              Sua doi
                            </button>
                            {change && (
                              <div className={cx("change-driverinfo")}>
                                <div
                                  className={cx("change-driverinfo_heading")}>
                                  <div className="flex justify-center items-end text-xl text-black-300 w-full">
                                    Sua thong tin
                                  </div>
                                  <div
                                    className="w-8 h-8  absolute right-0 top-0 flex justify-center items-center text-2xl"
                                    onClick={() => setChange(false)}>
                                    X
                                  </div>
                                </div>
                                <div className="w-full h-40 bg-red-400">
                                  {item.car}
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div
                          */}
      </div>
    </div>
  );
}

export default Manage;
