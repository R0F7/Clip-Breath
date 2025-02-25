import { FaStar } from "react-icons/fa";
import productBG from "../../assets/product_bg.png";
import frame from "../../assets/Frame (1).png";
import Button from "../Button/Button";
import img1 from "../../assets/product image 1.png";
import img2 from "../../assets/product image 2.png";
import img3 from "../../assets/product image 3.png";
import img4 from "../../assets/product image 4.png";
import { IoIosArrowDown } from "react-icons/io";

const ProductDetails = () => {
  return (
    <section className="container mx-auto my-20 flex gap-[64px]">
      {/* image site */}
      <div>
        <div className="w-[543.934px] h-[587.643px] bg-[#fff0e6] rounded-xl mb-[25px]">
          <img className="w-full h-full" src={productBG} alt="" />
        </div>
        <div className=" flex justify-between">
          <img
            className="w-[120px] h-[115px] bg-[#6B2B00] rounded-md"
            src={img1}
            alt=""
          />
          <img
            className="w-[120px] h-[115px] bg-[#F8FAFB] rounded-md"
            src={img2}
            alt=""
          />
          <img
            className="w-[120px] h-[115px] bg-[#F8FAFB] rounded-md"
            src={img3}
            alt=""
          />
          <img
            className="w-[120px] h-[115px] bg-[#F8FAFB] rounded-md"
            src={img4}
            alt=""
          />
        </div>
      </div>
      {/* text site */}
      <div className="w-[556px]">
        <div className="flex items-center gap-2 font-poppins mb-3">
          <ul className="flex text-yellow-400 gap-0.5">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <h4 className="text-lg font-semibold">4.5</h4>
          <span className="text-sm">(500+ Reviews)</span>
        </div>
        <h4 className="text-[#12151A] text-[40px] font-semibold mb-2 leading-none">
          Noseclip
        </h4>
        <div className="flex items-center gap-x-2 mb-[38.5px]">
          <h2 className="text-5xl font-semibold text-[#12151A]">$12.00 </h2>
          <del className="text-2xl font-medium text-[#12151A]">$20.00</del>
          <span className="text-xs font-semibold text-white bg-[#F60] py-1 px-2.5 rounded-sm">
            SAVE 10%
          </span>
        </div>
        <div>
          <h4 className="text-[#12151A] text-3xl font-semibold mb-3">
            Description:
          </h4>
          <p className="font-poppins mb-4">
            A nasal clip is a small device typically used to pinch or secure the
            nostrils for various purposes, such as during sports, medical
            treatments, or personal health practices. It is usually made of
            flexible or padded materials to ensure comfort and a secure fit.
            Common uses include:
          </p>
          <ul
            className="grid grid-cols-2 gap-4 w-[500px] text-lg font-medium list-inside mb-6"
            // style={{ listStyleImage: "url('/src/assets/Frame (1).png')" }}
          >
            <li className="flex items-center gap-1">
              <img src={frame} alt="" />
              <span>Boost performance</span>
            </li>
            <li className="flex items-center gap-1">
              <img src={frame} alt="" />
              <span>Stop snoring</span>
            </li>
            <li className="flex items-center gap-1">
              <img src={frame} alt="" />
              <span>Optimized Airflow</span>
            </li>
            <li className="flex items-center gap-1">
              <img src={frame} alt="" />
              <span>100% Drug Free</span>
            </li>
          </ul>
          <Button text={"Add to Card"} py={"10px"} width={true}></Button>
        </div>
        <div className="flex justify-between my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="58"
            viewBox="0 0 92 58"
            fill="none"
          >
            <path
              d="M83.2535 0H8.74724C8.43688 0 8.12597 0 7.81615 0.00164205C7.55459 0.00383145 7.29358 0.00656821 7.03202 0.0136838C6.46229 0.0290096 5.88763 0.0629453 5.32503 0.163658C4.76081 0.26015 4.21414 0.440013 3.70303 0.697325C2.67552 1.21899 1.84035 2.05265 1.31773 3.0783C1.05949 3.58868 0.879282 4.13479 0.783095 4.69846C0.681103 5.26059 0.647655 5.83366 0.632301 6.40181C0.625618 6.66267 0.621597 6.92359 0.620237 7.18452C0.619141 7.49323 0.619141 7.80303 0.619141 8.11338V49.8861C0.619141 50.1964 0.619141 50.5057 0.620237 50.816C0.621882 51.0766 0.625172 51.3376 0.632301 51.5987C0.647655 52.1658 0.681652 52.7394 0.783095 53.301C0.879084 53.8646 1.05911 54.4107 1.31718 54.9212C1.57665 55.4309 1.91533 55.8964 2.32065 56.3005C2.72528 56.7052 3.19169 57.0433 3.70248 57.3021C4.22176 57.5665 4.75365 57.7345 5.32558 57.8369C5.88763 57.9371 6.46229 57.971 7.03202 57.9863C7.29358 57.9923 7.55459 57.9956 7.81615 57.9973C8.12597 57.9995 8.43688 57.9995 8.74724 57.9995H83.2535C83.5633 57.9995 83.8742 57.9995 84.184 57.9973C84.445 57.9962 84.706 57.9923 84.9687 57.9863C85.5373 57.971 86.112 57.9371 86.6757 57.8369C87.24 57.7403 87.7867 57.5601 88.2977 57.3021C89.3247 56.7798 90.1597 55.9463 90.683 54.9212C90.9478 54.4028 91.1156 53.8719 91.2171 53.301C91.3191 52.7394 91.352 52.1658 91.3673 51.5987C91.3744 51.3376 91.3783 51.0766 91.3794 50.816C91.3816 50.5057 91.3816 50.1964 91.3816 49.8861V8.11392C91.3816 7.80358 91.3816 7.49378 91.3794 7.18398C91.3783 6.92322 91.3743 6.66248 91.3673 6.40181C91.352 5.83366 91.3191 5.26059 91.2171 4.69846C91.1216 4.1347 90.9415 3.58851 90.683 3.0783C90.1601 2.05283 89.325 1.21924 88.2977 0.697325C87.7865 0.440278 87.2399 0.260603 86.6757 0.164205C86.112 0.0629453 85.5373 0.0295569 84.9687 0.0142311C84.7072 0.00760121 84.4456 0.00358711 84.184 0.0021894C83.8742 0 83.5633 0 83.2535 0Z"
              fill="black"
            />
            <path
              d="M83.2513 1.93286L84.1681 1.9345C84.416 1.93615 84.6644 1.93888 84.9139 1.94545C85.3487 1.95749 85.8565 1.98103 86.3302 2.06587C86.7415 2.13976 87.0869 2.25197 87.4181 2.42055C88.081 2.75693 88.6194 3.295 88.9557 3.95696C89.1235 4.28537 89.2354 4.62802 89.3094 5.04236C89.3938 5.5098 89.4174 6.01829 89.4289 6.45452C89.4361 6.70083 89.4393 6.94714 89.4399 7.19892C89.4426 7.5038 89.4426 7.80812 89.4426 8.11354V49.8862C89.4426 50.1917 89.4426 50.496 89.4404 50.8069C89.4393 51.0532 89.4361 51.2995 89.4295 51.5458C89.4174 51.9815 89.3938 52.49 89.3083 52.9629C89.2461 53.3391 89.1268 53.7036 88.9546 54.0439C88.6176 54.7061 88.0784 55.2442 87.4149 55.5803C87.0859 55.7478 86.7415 55.86 86.3341 55.9334C85.851 56.0193 85.3213 56.0429 84.9226 56.0538C84.672 56.0593 84.4225 56.0631 84.1665 56.0642C83.8621 56.0664 83.5562 56.0664 83.2513 56.0664H8.733C8.43141 56.0664 8.12982 56.0664 7.82275 56.0642C7.57597 56.0631 7.3292 56.0598 7.08248 56.0543C6.67452 56.0434 6.14481 56.0193 5.66556 55.9339C5.28665 55.8709 4.91948 55.7509 4.57655 55.5781C4.24761 55.4114 3.94738 55.1933 3.68714 54.9323C3.42608 54.6721 3.20805 54.3723 3.04119 54.0439C2.86887 53.7017 2.74944 53.3354 2.68696 52.9574C2.60142 52.4851 2.57729 51.9788 2.56632 51.5464C2.56013 51.2992 2.55647 51.052 2.55536 50.8047L2.55371 50.0784V7.92197L2.55481 7.19673C2.55594 6.94912 2.5596 6.70152 2.56577 6.45398C2.57784 6.02048 2.60142 5.51418 2.68751 5.03798C2.75011 4.66078 2.86954 4.29521 3.04174 3.95368C3.20843 3.62636 3.42558 3.32751 3.68878 3.06533C3.94965 2.80452 4.2502 2.58654 4.57929 2.41946C4.92138 2.2479 5.28739 2.12871 5.66501 2.06587C6.13933 1.98103 6.64765 1.95749 7.08303 1.94545C7.33088 1.93888 7.57928 1.93615 7.82549 1.9345L8.74506 1.93286H83.2513Z"
              fill="white"
            />
            <path
              d="M24.475 19.5787C25.2448 18.6181 25.7669 17.328 25.6292 16.01C24.5029 16.0658 23.1288 16.7517 22.3326 17.7134C21.6181 18.5366 20.9858 19.8803 21.1503 21.1431C22.4148 21.2525 23.6782 20.5125 24.475 19.5787Z"
              fill="black"
            />
            <path
              d="M25.6164 21.3888C23.7795 21.2794 22.2189 22.4288 21.3421 22.4288C20.4647 22.4288 19.1218 21.4436 17.6693 21.4704C15.7791 21.4977 14.0255 22.5651 13.0659 24.2619C11.093 27.6554 12.545 32.6911 14.4642 35.4552C15.3959 36.8236 16.5189 38.3288 17.9983 38.2746C19.3966 38.2199 19.9444 37.3715 21.6431 37.3715C23.3414 37.3715 23.8349 38.2746 25.3148 38.2472C26.8491 38.2198 27.8087 36.8788 28.7404 35.5105C29.8096 33.9505 30.2467 32.4453 30.2741 32.3632C30.2467 32.3358 27.3152 31.2132 27.2878 27.847C27.2604 25.0282 29.5897 23.6871 29.6994 23.6045C28.3839 21.6625 26.3287 21.4436 25.6159 21.3888"
              fill="black"
            />
            <path
              d="M43.9237 17.5747C47.9145 17.5747 50.6941 20.3208 50.6941 24.3186C50.6941 28.3307 47.8575 31.091 43.8239 31.091H39.4053V38.1058H36.2129V17.5747H43.9237ZM39.4053 28.4161H43.0683C45.8484 28.4161 47.4298 26.9224 47.4298 24.3328C47.4298 21.7439 45.8478 20.2638 43.0825 20.2638H39.4053V28.4161Z"
              fill="black"
            />
            <path
              d="M51.4863 33.8513C51.4863 31.2191 53.496 29.7112 57.2017 29.4835L61.1783 29.2415V28.103C61.1783 26.4391 60.0811 25.5283 58.1284 25.5283C56.5174 25.5283 55.3483 26.3532 55.107 27.6192H52.2271C52.3132 24.9591 54.8214 23.0242 58.214 23.0242C61.8626 23.0242 64.243 24.9306 64.243 27.8901V38.1053H61.2929V35.6439H61.2216C60.3805 37.2515 58.5271 38.2613 56.5174 38.2613C53.553 38.2613 51.4863 36.4977 51.4863 33.8513ZM61.1783 32.5284V31.3756L57.6294 31.6033C55.6335 31.7314 54.5938 32.4709 54.5938 33.7654C54.5938 35.0177 55.6768 35.8289 57.3728 35.8289C59.5388 35.8289 61.1783 34.4485 61.1783 32.5284Z"
              fill="black"
            />
            <path
              d="M66.9564 43.5958V41.135C67.1559 41.1629 67.6401 41.1913 67.8968 41.1913C69.3077 41.1913 70.106 40.5947 70.5908 39.0572L70.8759 38.147L65.4736 23.2081H68.8087L72.5719 35.3298H72.6432L76.406 23.2081H79.656L74.0541 38.9007C72.771 42.5006 71.3031 43.6818 68.1962 43.6818C67.9538 43.6818 67.1697 43.6533 66.9564 43.5958Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="64"
            viewBox="0 0 96 64"
            fill="none"
          >
            <path
              opacity="0.07"
              d="M86.7368 0H9.26316C5.14737 0 2 3.14167 2 7.25V50.75C2 54.8583 5.38947 58 9.26316 58H86.7368C90.8526 58 94 54.8583 94 50.75V7.25C94 3.14167 90.6105 0 86.7368 0Z"
              fill="black"
            />
            <g filter="url(#filter0_d_4308_196)">
              <path
                d="M86.7369 2.41663C89.4001 2.41663 91.579 4.59163 91.579 7.24996V50.75C91.579 53.4083 89.4001 55.5833 86.7369 55.5833H9.26325C6.60009 55.5833 4.42114 53.4083 4.42114 50.75V7.24996C4.42114 4.59163 6.60009 2.41663 9.26325 2.41663H86.7369Z"
                fill="white"
              />
            </g>
            <path
              d="M45.8025 28.9413V36.6747H43.3379V17.583H49.8529C50.6336 17.5698 51.4091 17.7108 52.135 17.9978C52.8608 18.2848 53.5227 18.7121 54.0825 19.2553C54.6128 19.7493 55.0404 20.3427 55.3408 21.0017C55.6412 21.6607 55.8086 22.3723 55.8333 23.0959C55.858 23.8195 55.7396 24.5409 55.4849 25.2187C55.2302 25.8966 54.8442 26.5178 54.3488 27.0467L54.0825 27.327C52.9446 28.4072 51.4242 28.9945 49.8529 28.9558L45.8025 28.9413ZM45.8025 19.9223V26.66H49.9135C50.8262 26.689 51.7075 26.3338 52.3466 25.6837C52.8038 25.208 53.1108 24.6086 53.2294 23.9602C53.348 23.3117 53.273 22.6428 53.0137 22.0365C52.7544 21.4303 52.3223 20.9135 51.7711 20.5505C51.2198 20.1875 50.5739 19.9942 49.9135 19.9948L45.8025 19.9223ZM61.5006 23.18C63.0743 23.1075 64.6141 23.6343 65.8053 24.6614C66.8826 25.7006 67.4564 27.1506 67.3789 28.6465V36.7037H65.0329V34.8525H64.9143C64.4936 35.5468 63.8987 36.1196 63.1883 36.5141C62.478 36.9087 61.6768 37.1115 60.8639 37.1024C59.5369 37.1453 58.2429 36.6851 57.242 35.8143C56.7678 35.4282 56.3877 34.9395 56.1306 34.3852C55.8735 33.8309 55.7461 33.2254 55.7579 32.6147C55.7299 31.9974 55.85 31.3825 56.1082 30.8209C56.3663 30.2593 56.755 29.7674 57.242 29.386C58.4366 28.5285 59.8824 28.0907 61.3529 28.1414C62.6046 28.0931 63.8466 28.3662 64.9603 28.9413V28.4387C64.9685 28.0231 64.8818 27.6111 64.7069 27.2338C64.532 26.8566 64.2734 26.524 63.9507 26.2612C63.3027 25.6732 62.4537 25.355 61.5781 25.3719C60.9421 25.3659 60.3152 25.5219 59.7564 25.8251C59.1976 26.1283 58.7255 26.5687 58.3847 27.1047L56.2179 25.7417C56.8063 24.9002 57.6006 24.223 58.5253 23.7746C59.45 23.3262 60.4743 23.1215 61.5006 23.18ZM58.3847 32.6727C58.3789 32.9857 58.4503 33.2953 58.5925 33.5743C58.7348 33.8533 58.9437 34.093 59.2006 34.2725C59.7405 34.6978 60.4112 34.9226 61.1012 34.9081C62.1398 34.9057 63.1348 34.4972 63.8757 33.7674C64.6141 33.0763 65.0329 32.112 65.0329 31.1018C64.1009 30.4404 62.9684 30.1211 61.8275 30.198C60.9416 30.1632 60.0678 30.4121 59.3338 30.9085C59.0431 31.1026 58.8045 31.365 58.6391 31.6726C58.4736 31.9801 58.3863 32.3236 58.3847 32.6727ZM80.8666 23.6102L72.6593 42.436H70.122L73.2234 35.8433L67.8389 23.6102H70.5094L74.4121 32.9989L78.2107 23.6102H80.8666Z"
              fill="#5F6368"
            />
            <path
              d="M35.8609 27.2703C35.8609 26.526 35.8028 25.7817 35.6842 25.047H25.2979V29.2689H31.2319C31.111 29.9399 30.8558 30.5796 30.4814 31.1498C30.107 31.7199 29.6211 32.2088 29.0529 32.587V35.3275H32.5973C33.675 34.2866 34.5223 33.0318 35.0844 31.6441C35.6465 30.2563 35.911 28.7664 35.8609 27.2703Z"
              fill="#4285F4"
            />
            <path
              d="M25.3103 37.9923C27.9888 38.0657 30.5947 37.1177 32.5977 35.3412L29.0485 32.5862C28.1956 33.132 27.2294 33.4765 26.2231 33.5935C25.2169 33.7105 24.1972 33.5969 23.2415 33.2614C22.2859 32.9258 21.4194 32.3772 20.7081 31.6572C19.9968 30.9372 19.4594 30.0647 19.1367 29.1062H15.5002V31.9337C16.4102 33.7535 17.81 35.2844 19.5428 36.3545C21.2756 37.4246 23.2727 37.9917 25.3103 37.9923Z"
              fill="#34A853"
            />
            <path
              d="M19.1389 29.1197C18.6784 27.7598 18.6784 26.2866 19.1389 24.9267V22.0992H15.5025C14.7273 23.6253 14.3232 25.3122 14.3232 27.0232C14.3232 28.7342 14.7273 30.4211 15.5025 31.9472L19.1389 29.1197Z"
              fill="#FBBC04"
            />
            <path
              d="M25.3103 20.3972C26.8768 20.3686 28.391 20.9593 29.523 22.0405L32.6703 18.9157C30.6635 17.0356 28.0017 16.0101 25.2498 16.0568C23.2243 16.067 21.2411 16.6368 19.5202 17.7033C17.7993 18.7697 16.4079 20.291 15.5002 22.0985L19.1367 24.9284C19.5619 23.6236 20.3861 22.4847 21.4936 21.6719C22.601 20.8591 23.9359 20.4133 25.3103 20.3972Z"
              fill="#EA4335"
            />
            <defs>
              <filter
                id="filter0_d_4308_196"
                x="0.421143"
                y="2.41663"
                width="95.158"
                height="61.1666"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4308_196"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4308_196"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="58"
            viewBox="0 0 92 58"
            fill="none"
          >
            <path
              opacity="0.07"
              d="M84.7368 0H7.26316C3.14737 0 0 3.14167 0 7.25V50.75C0 54.8583 3.38947 58 7.26316 58H84.7368C88.8526 58 92 54.8583 92 50.75V7.25C92 3.14167 88.6105 0 84.7368 0Z"
              fill="black"
            />
            <path
              d="M84.7369 2.41663C87.4001 2.41663 89.579 4.59163 89.579 7.24996V50.75C89.579 53.4083 87.4001 55.5833 84.7369 55.5833H7.26325C4.60009 55.5833 2.42114 53.4083 2.42114 50.75V7.24996C2.42114 4.59163 4.60009 2.41663 7.26325 2.41663H84.7369Z"
              fill="white"
            />
            <path
              d="M36.3155 45.9167C45.6753 45.9167 53.2629 38.3429 53.2629 29C53.2629 19.6572 45.6753 12.0834 36.3155 12.0834C26.9558 12.0834 19.3682 19.6572 19.3682 29C19.3682 38.3429 26.9558 45.9167 36.3155 45.9167Z"
              fill="#EB001B"
            />
            <path
              d="M55.6847 45.9167C65.0444 45.9167 72.632 38.3429 72.632 29C72.632 19.6572 65.0444 12.0834 55.6847 12.0834C46.3249 12.0834 38.7373 19.6572 38.7373 29C38.7373 38.3429 46.3249 45.9167 55.6847 45.9167Z"
              fill="#F79E1B"
            />
            <path
              d="M53.2636 29C53.2636 23.2 50.3584 18.125 46.0005 15.225C41.6426 18.3666 38.7373 23.4416 38.7373 29C38.7373 34.5583 41.6426 39.875 46.0005 42.775C50.3584 39.875 53.2636 34.8 53.2636 29Z"
              fill="#FF5F00"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="58"
            viewBox="0 0 92 58"
            fill="none"
          >
            <path
              opacity="0.07"
              d="M84.7368 0H7.26316C3.14737 0 0 3.14167 0 7.25V50.75C0 54.8583 3.38947 58 7.26316 58H84.7368C88.8526 58 92 54.8583 92 50.75V7.25C92 3.14167 88.6105 0 84.7368 0Z"
              fill="black"
            />
            <path
              d="M86.8892 0C89.7 0 92 2.37317 92 5.27317V52.7268C92 55.6268 89.7 58 86.8892 58H5.10842C2.3 58 0 55.6268 0 52.7268V5.27317C0 2.37317 2.3 0 5.11084 0H86.8892Z"
              fill="#5A31F4"
            />
            <path
              d="M22.6344 27.4727C20.1722 26.9338 19.0754 26.7235 19.0754 25.7689C19.0754 24.8699 19.8163 24.4204 21.3028 24.4204C22.6102 24.4204 23.5641 24.9956 24.2686 26.1218C24.2934 26.1636 24.3333 26.1943 24.3801 26.2078C24.4269 26.2213 24.4771 26.2164 24.5204 26.1943L27.2949 24.7829C27.3185 24.7703 27.3394 24.7531 27.3562 24.7323C27.3729 24.7114 27.3853 24.6874 27.3925 24.6617C27.3998 24.6359 27.4017 24.609 27.3983 24.5825C27.3948 24.556 27.386 24.5304 27.3724 24.5074C26.2224 22.4992 24.0967 21.3996 21.2956 21.3996C17.6156 21.3996 15.3301 23.2242 15.3301 26.1266C15.3301 29.2078 18.1143 29.986 20.5838 30.5249C23.0532 31.0614 24.1524 31.2741 24.1524 32.2287C24.1524 33.1857 23.3486 33.6352 21.7483 33.6352C20.2666 33.6352 19.1699 32.9537 18.5041 31.6293C18.4808 31.584 18.4405 31.5497 18.392 31.5339C18.3435 31.518 18.2907 31.5219 18.245 31.5448L15.4778 32.9223C15.4308 32.9465 15.3953 32.9883 15.379 33.0385C15.3627 33.0887 15.3668 33.1433 15.3906 33.1905C16.4898 35.4138 18.7413 36.6632 21.7507 36.6632C25.5832 36.6632 27.8978 34.8701 27.8978 31.8783C27.8978 28.8864 25.1014 28.0164 22.6368 27.4799L22.6344 27.4727ZM37.4997 21.3996C35.926 21.3996 34.5363 21.9603 33.5388 22.9608C33.5251 22.9752 33.5073 22.9851 33.4878 22.9891C33.4683 22.9931 33.4481 22.991 33.4298 22.983C33.4115 22.9751 33.3962 22.9617 33.3858 22.9448C33.3754 22.9278 33.3705 22.9081 33.3718 22.8882V16.5082C33.3721 16.4827 33.3673 16.4573 33.3577 16.4335C33.3481 16.4098 33.3339 16.3882 33.3159 16.37C33.2979 16.3518 33.2764 16.3373 33.2528 16.3274C33.2291 16.3176 33.2037 16.3125 33.1781 16.3125H29.7039C29.678 16.3125 29.6524 16.3176 29.6286 16.3277C29.6048 16.3377 29.5832 16.3524 29.5652 16.3708C29.5471 16.3893 29.533 16.4112 29.5235 16.4352C29.5141 16.4592 29.5095 16.4849 29.5102 16.5107V36.3128C29.5095 36.3386 29.5141 36.3643 29.5235 36.3883C29.533 36.4123 29.5471 36.4342 29.5652 36.4527C29.5832 36.4711 29.6048 36.4858 29.6286 36.4958C29.6524 36.5059 29.678 36.511 29.7039 36.511H33.1732C33.1993 36.5113 33.2251 36.5064 33.2492 36.4965C33.2733 36.4867 33.2952 36.472 33.3135 36.4535C33.3318 36.435 33.3462 36.413 33.3558 36.3889C33.3654 36.3647 33.37 36.3388 33.3693 36.3128V27.6273C33.3693 25.9478 34.6477 24.6621 36.369 24.6621C38.088 24.6621 39.3372 25.9212 39.3372 27.6273V36.3128C39.3366 36.3388 39.3412 36.3647 39.3508 36.3889C39.3604 36.413 39.3748 36.435 39.3931 36.4535C39.4114 36.472 39.4332 36.4867 39.4573 36.4965C39.4814 36.5064 39.5073 36.5113 39.5333 36.511H43.0027C43.0288 36.5113 43.0546 36.5064 43.0787 36.4965C43.1028 36.4867 43.1247 36.472 43.143 36.4535C43.1613 36.435 43.1757 36.413 43.1853 36.3889C43.1949 36.3647 43.1995 36.3388 43.1988 36.3128V27.6273C43.1988 23.9782 40.8262 21.3996 37.4997 21.3996ZM50.2417 20.8317C48.3581 20.8317 46.5931 21.4117 45.3269 22.2527C45.2845 22.28 45.2541 22.3225 45.242 22.3715C45.2298 22.4204 45.2368 22.4721 45.2616 22.5161L46.7917 25.1454C46.8042 25.1678 46.8211 25.1874 46.8414 25.2032C46.8616 25.219 46.8848 25.2306 46.9096 25.2373C46.9344 25.2441 46.9603 25.2458 46.9857 25.2425C47.0112 25.2392 47.0358 25.2308 47.058 25.2179C48.0186 24.6327 49.1236 24.3264 50.2489 24.3334C53.2752 24.3334 55.5026 26.4867 55.5026 29.3311C55.5026 31.755 53.7207 33.5482 51.4619 33.5482C49.6219 33.5482 48.3436 32.4703 48.3436 30.9454C48.3436 30.073 48.7116 29.3577 49.6703 28.8526C49.6941 28.8405 49.7151 28.8236 49.7321 28.803C49.749 28.7825 49.7615 28.7586 49.7688 28.7329C49.7761 28.7073 49.778 28.6804 49.7744 28.654C49.7707 28.6276 49.7617 28.6022 49.7478 28.5795L48.3048 26.1193C48.2819 26.0793 48.2454 26.0488 48.2018 26.0333C48.1583 26.0178 48.1107 26.0183 48.0676 26.0347C46.1331 26.7573 44.7773 28.4949 44.7773 30.8294C44.7773 34.3577 47.5664 36.9919 51.4594 36.9919C56.0038 36.9919 59.2722 33.8188 59.2722 29.2707C59.2722 24.3938 55.4711 20.8317 50.2417 20.8317ZM69.4212 21.3706C67.6684 21.3706 66.0971 22.0231 64.9544 23.1734C64.8914 23.2387 64.7873 23.1903 64.7873 23.1033V21.721C64.788 21.6952 64.7835 21.6695 64.774 21.6455C64.7646 21.6215 64.7504 21.5996 64.7324 21.5812C64.7143 21.5627 64.6927 21.548 64.6689 21.538C64.6451 21.528 64.6195 21.5228 64.5937 21.5228H61.2114C61.1856 21.5228 61.16 21.528 61.1362 21.538C61.1124 21.548 61.0908 21.5627 61.0728 21.5812C61.0547 21.5996 61.0405 21.6215 61.0311 21.6455C61.0216 21.6695 61.0171 21.6952 61.0178 21.721V41.4942C61.0174 41.5198 61.0222 41.5452 61.0318 41.5689C61.0414 41.5926 61.0556 41.6142 61.0736 41.6324C61.0916 41.6507 61.1131 41.6651 61.1368 41.675C61.1604 41.6848 61.1858 41.6899 61.2114 41.6899H64.6808C64.7067 41.6902 64.7323 41.6854 64.7562 41.6757C64.7802 41.666 64.8019 41.6516 64.8202 41.6333C64.8385 41.6151 64.8529 41.5934 64.8627 41.5695C64.8724 41.5456 64.8772 41.52 64.8769 41.4942V35.0103C64.8769 34.9233 64.981 34.8797 65.044 34.9377C66.23 36.0439 67.7982 36.65 69.4212 36.6294C73.4934 36.6294 76.6674 33.3113 76.6674 29C76.6674 24.6887 73.4886 21.3706 69.4212 21.3706ZM68.7651 33.2823C66.4506 33.2823 64.6953 31.4263 64.6953 28.9734C64.6953 26.5205 66.4458 24.6645 68.7651 24.6645C71.0845 24.6645 72.8325 26.4891 72.8325 28.9734C72.8325 31.4553 71.1087 33.2823 68.7651 33.2823Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="58"
            viewBox="0 0 92 58"
            fill="none"
          >
            <path
              opacity="0.07"
              d="M84.7368 0H7.26316C3.14737 0 0 3.14167 0 7.25V50.75C0 54.8583 3.38947 58 7.26316 58H84.7368C88.8526 58 92 54.8583 92 50.75V7.25C92 3.14167 88.6105 0 84.7368 0Z"
              fill="black"
            />
            <path
              d="M84.7369 2.41663C87.4001 2.41663 89.579 4.59163 89.579 7.24996V50.75C89.579 53.4083 87.4001 55.5833 84.7369 55.5833H7.26325C4.60009 55.5833 2.42114 53.4083 2.42114 50.75V7.24996C2.42114 4.59163 4.60009 2.41663 7.26325 2.41663H84.7369Z"
              fill="white"
            />
            <path
              d="M68.5158 24.4084H67.7894C66.821 26.825 66.0947 28.0334 65.3684 31.6584H69.9684C69.2421 28.0334 69.2421 26.3417 68.5158 24.4084ZM75.5368 38.6667H71.421C71.1789 38.6667 71.1789 38.6667 70.9368 38.425L70.4526 36.25L70.2105 35.7667H64.4C64.1579 35.7667 63.9158 35.7667 63.9158 36.25L63.1894 38.425C63.1894 38.6667 62.9473 38.6667 62.9473 38.6667H57.8631L58.3473 37.4584L65.3684 21.025C65.3684 19.8167 66.0947 19.3334 67.3052 19.3334H70.9368C71.1789 19.3334 71.421 19.3334 71.421 19.8167L74.8105 35.525C75.0526 36.4917 75.2947 37.2167 75.2947 38.1834C75.5368 38.425 75.5368 38.425 75.5368 38.6667ZM43.0947 37.9417L44.0631 33.5917C44.3052 33.5917 44.5473 33.8334 44.5473 33.8334C46.2421 34.5584 47.9368 35.0417 49.6315 34.8C50.1158 34.8 50.8421 34.5584 51.3263 34.3167C52.5368 33.8334 52.5368 32.625 51.5684 31.6584C51.0842 31.175 50.3579 30.9334 49.6315 30.45C48.6631 29.9667 47.6947 29.4834 46.9684 28.7584C44.0631 26.3417 45.0315 22.9584 46.7263 21.2667C48.1789 20.3 48.9052 19.3334 50.8421 19.3334C53.7473 19.3334 56.8947 19.3334 58.3473 19.8167H58.5894C58.3473 21.2667 58.1052 22.475 57.621 23.925C56.4105 23.4417 55.2 22.9584 53.9894 22.9584C53.2631 22.9584 52.5368 22.9584 51.8105 23.2C51.3263 23.2 51.0842 23.4417 50.8421 23.6834C50.3579 24.1667 50.3579 24.8917 50.8421 25.375L52.0526 26.3417C53.021 26.825 53.9894 27.3084 54.7158 27.7917C55.9263 28.5167 57.1368 29.725 57.3789 31.175C57.8631 33.35 57.1368 35.2834 55.2 36.7334C53.9894 37.7 53.5052 38.1834 51.8105 38.1834C48.421 38.1834 45.7579 38.425 43.5789 37.7C43.3368 38.1834 43.3368 38.1834 43.0947 37.9417ZM34.621 38.6667C34.8631 36.975 34.8631 36.975 35.1052 36.25C36.3158 30.9334 37.5263 25.375 38.4947 20.0584C38.7368 19.575 38.7368 19.3334 39.221 19.3334H43.5789C43.0947 22.2334 42.6105 24.4084 41.8842 27.0667C41.1579 30.6917 40.4315 34.3167 39.4631 37.9417C39.4631 38.425 39.221 38.425 38.7368 38.425M12.1052 19.8167C12.1052 19.575 12.5894 19.3334 12.8315 19.3334H21.0631C22.2736 19.3334 23.2421 20.0584 23.4842 21.2667L25.6631 31.9C25.6631 32.1417 25.6631 32.1417 25.9052 32.3834C25.9052 32.1417 26.1473 32.1417 26.1473 32.1417L31.2315 19.8167C30.9894 19.575 31.2315 19.3334 31.4736 19.3334H36.5579C36.5579 19.575 36.5579 19.575 36.3158 19.8167L28.8105 37.4584C28.5684 37.9417 28.5684 38.1834 28.3263 38.425C28.0842 38.6667 27.6 38.425 27.1158 38.425H23.4842C23.2421 38.425 23 38.425 23 37.9417L19.1263 22.9584C18.6421 22.475 17.9158 21.75 16.9473 21.5084C15.4947 20.7834 12.8315 20.3 12.3473 20.3L12.1052 19.8167Z"
              fill="#142688"
            />
          </svg>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-between border-b border-[#FFD0B0] pt-0 p-2 text-[#4A4C56] font-medium">
              <p>Sizing information</p>
              <i>
                <IoIosArrowDown />
              </i>
            </li>
            <li className="flex items-center justify-between border-b border-[#FFD0B0] p-2 text-[#4A4C56] font-medium">
              <p>Free resizing</p>
              <i>
                <IoIosArrowDown />
              </i>
            </li>
            <li className="flex items-center justify-between border-b border-[#FFD0B0] p-2 text-[#4A4C56] font-medium">
              <p>Money back guarantee & free returns</p>
              <i>
                <IoIosArrowDown />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
