import image14 from "../image/man_dp3.jpg"
import image15 from "../image/gir_dp2.jpg"
import image16 from "../image/man_dp1.jpg"
import image17 from "../image/gir_dp3.jpg"
import image18 from "../image/man_dp2.jpg"
import image19 from "../image/girl_dp1.jpg"
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"

export default function Review() {
  return (
    <div
      className="review flex flex-col  mt-28 items-center justify-center w-full h-screen pt-[80px] mx-auto"
      id="review"
    >
      <h1 className="text-[60px] flex items-center justify-center uppercase">
        Customer's
        <span className="ml-[15px] bg-gradient-to-l from-[#c72092] to-[#6c14d0] text-transparent bg-clip-text">
          review
        </span>
      </h1>
      <div className="review_box  w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[90px] items-center justify-items-center">
        {[
          { id: 1, name: "Chairth Aruna", img: image14 },
          { id: 2, name: "Kasheema Afzal", img: image15 },
          { id: 3, name: "Sayuru Tharanga", img: image16 },
          { id: 4, name: "Radini Lochana", img: image17 },
          { id: 5, name: "Nadeem Khan", img: image18 },
          { id: 6, name: "Haseena Rani", img: image19 },
        ].map((review) => (
          <div
            key={review.id}
            className="review_card w-[400px] bg-[#f3f1f1] p-[20px_25px] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          >
            <div className="card_top flex justify-between items-center mb-4">
              <div className="profile flex items-center">
                <div className="profile_image w-[60px] h-[60px] rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-125 transition-transform duration-300">
                  <Image
                    src={review.img}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="name ml-[20px]">
                  <p className="text-[20px] font-medium">{review.name}</p>
                  <div className="like flex text-orange-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </div>
            <div className="comment text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident, Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Provident, Lorem ipsum dolor sit amet, reprehenderit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}