import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Manage.module.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DriverManage } from 'src/api/services/getDataAPI';
const cx = classNames.bind(styles);

function Manage() {
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

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/thongso`;
    navigate(path);
  };
  return (
    <div className={cx('wrapper')}>
      {/* <div className={cx("header")}>
        <div className={cx("leftHeader")}>
          <div className={cx("icon")}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Tim kiem nhanh"
              className={cx("timkiem")}
            />
          </div>
        </div>
        <div className={cx("rightHeader")}>
          <img
            src="https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-lam-the-can-cuoc.jpg"
            className={cx("image")}
            alt="avatar"
          />
          <div className={cx("text")}>Mr. Hung</div>
          
          <div className={cx("icon")}>
            <button className={cx("logout")}>Thoát</button>
          </div>
        </div>
      </div> */}
      <form>
        <div className="flex items-center	text-center justify-center	">
          <h1 className="my-8 text-center text-5xl leading-[50px] font-extrabold text-gray-900 dark:text-white mr-2">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              QUẢN LÝ
            </span>{' '}
            XE CHO THUÊ
          </h1>
          <img
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

      <div className={cx('body')}>
        {/* <div className={cx('topBody')}>
          <div className={cx('stateRent')}>
            <div className={cx('leftImage1')}></div>
            <div className={cx('state')}>
              <p className={cx('text1')}>Xe cho thuê</p>
              <p className={cx('text2')}>{data.length}</p>
            </div>
          </div>
          <div className={cx('stateRent')}>
            <div className={cx('leftImage2')}></div>
            <div className={cx('state')}>
              <p className={cx('text1')}>Đang hoạt động</p>
              <p className={cx('text2')}>1</p>
            </div>
          </div>
          <div className={cx('stateRent')}>
            <div className={cx('leftImage3')}></div>
            <div className={cx('state')}>
              <p className={cx('text1')}>Đang nghỉ</p>
              <p className={cx('text2')}>4</p>
            </div>
          </div>
        </div> */}
        <div className="flex">
          <a
            href="#"
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
            href="#"
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
            href="#"
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
        <div className="flex flex-col">
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
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={cx('bottomBody')}>
          <table className={cx('table')}>
            <thead>
              <tr>
                <th className={cx('nameTB')}>Họ và Tên</th>
                <th className={cx('phoneTB')}>Số điện thoại</th>
                <th className={cx('typeTB')}>Loại xe</th>
                <th className={cx('bienso')}>Biển số</th>
                <th className={cx('timeRent')}>Ngày bắt đầu thuê</th>
                <th className={cx('typeRent')}>Loại hình thuê</th>
                <th className={cx('stateTB')}>Trạng thái</th>
                <th className={cx('nameTB2')}></th>
              </tr>
            </thead>
            <tbody>
              {data.length &&
                data.map((item, index) => (
                  <tr key={item.name}>
                    <td className={cx('nameTB2')}>{item.name}</td>
                    <td className={cx('nameTB2')}>{item.phone}</td>
                    <td className={cx('nameTB2')}>{item.car}</td>
                    <td className={cx('nameTB2')}>{item.platenumber}</td>
                    <td className={cx('nameTB2')}>{item.rentdate}</td>
                    <td className={cx('nameTB2')}>{item.renttype}</td>
                    <td className={cx('nameTB2')}>{item.state}</td>
                    <td className={cx('nameTB2')}>
                      <button
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={routeChange}>
                        Kiem tra
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}

export default Manage;

// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>

// </tr>
// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>
//   <td className={cx("nameTB2")}>
//     <button onClick={routeChange}>Kiem tra</button>
//   </td>
// </tr>
// <tr>
//   <td className={cx("nameTB2")}>Soos</td>
//   <td className={cx("phoneTB2")}>Số điện thoại</td>
//   <td className={cx("typeTB2")}>Loại xe</td>
//   <td className={cx("bienso2")}>Biển số</td>
//   <td className={cx("timeRent2")}>Ngày bắt đầu thuê</td>
//   <td className={cx("typeRent2")}>Loại hình thuê</td>
//   <td className={cx("stateTB2")}>Trạng thái</td>
//   <td className={cx("nameTB2")}>
//     <button onClick={routeChange}>Kiem tra</button>
//   </td>
// </tr>
