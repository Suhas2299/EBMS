// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { HomeAction } from "../redux/store";
import { AppNav } from "./AppNav";
import customerimage from "../Assert/customerimage.jpg";
import SimpleImageSlider from "react-simple-image-slider";

export const Home = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1610028290816-5d937a395a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/07/19/23/16/power-plant-4349830__340.jpg ",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/04/10/12/52/wind-turbine-2218457__340.jpg",
      //
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/11/21/12/36/broken-1845107__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/12/01/13/15/light-bulbs-1875268__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/05/30/23/29/electricity-3442835__340.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/10/05/03/50/power-972191__340.jpg",
    },
  ];

  return (
    <div>
      {/* <AppNav /> */}
      <div>
        {/* <h3 className="text-center">
          Welcome To Electricity Bill Management System
        </h3> */}
      </div>

      <nav>
        <div class="nav-list">
          <ul>
            <li>
              <a href="/customer-upsert" data-testid="id3">
                Customer
              </a>
            </li>
            <li>
              <a href="/address" data-testid="id4">
                Address
              </a>
            </li>
            <li>
              <a href="/connection-upsert" data-testid="id5">
                Connection
              </a>
            </li>
            <li>
              <a href="/reading-upsert" data-testid="id6">
                Reading
              </a>
            </li>
            <li>
              <a href="/bill-upsert">Bill</a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <SimpleImageSlider
          width={1365}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>

      <div class="textbook">
        <h1 class="textbooks">Welcome To Electricity Bill Management System</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
          voluptatem, dolorum
        </p>
        <a href="about-us" class="btn" style={{ border: "2px solid black" }}>
          visit us to know more
        </a>
      </div>
    </div>
  );
};

// const images = [
//   { url: { customerimage } },
//   { url: "" },
//   { url: "" },
//   { url: "" },
//   { url: "" },
//   { url: "" },
//   { url: "" },
// ];

// const App = () => {
//   return (
//     <div>
//       <SimpleImageSlider
//         width={896}
//         height={504}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//       />
//     </div>
//   );
// };
