import React from "react";

import { Column, Stack, Img, Row, Text, Button } from "components";

const ReviewPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center mx-[auto] 3xl:pb-[109px] lg:pb-[70px] xl:pb-[80px] pb-[91px] w-[100%]">
        <Stack className="lg:h-[354px] xl:h-[405px] h-[455px] 2xl:h-[456px] 3xl:h-[547px] w-[100%]">
          <Img
            src="images/img_rectangle3.png"
            className="absolute bottom-[17%] lg:h-[206px] xl:h-[235px] h-[264px] 2xl:h-[265px] 3xl:h-[317px] inset-x-[0] mx-[auto] w-[99%]"
            alt="Rectangle3"
          />
          <Stack className="absolute bg-blue_300 xl:h-[108px] h-[121px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] left-[0] top-[0] w-[80%]">
            <header className="absolute top-[0] w-[100%]">
              <div className="overflow-x-auto w-[100%]">
                <Stack className="xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] w-[100%]">
                  <div className="absolute bg-blue_300 xl:h-[103px] h-[115px] 2xl:h-[116px] 3xl:h-[139px] lg:h-[90px] right-[0] w-[100%]"></div>
                  <Row className="absolute items-center justify-between right-[0] top-[0] w-[61%]">
                    <Img
                      src="images/img_vector.png"
                      className="lg:h-[23px] xl:h-[26px] h-[29px] 2xl:h-[30px] 3xl:h-[35px] w-[7%]"
                      alt="Vector"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                      Home
                    </Text>
                    <Img
                      src="images/img_vector_1.png"
                      className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] w-[5%]"
                      alt="Vector"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                      Admin
                    </Text>
                    <Img
                      src="images/img_vector_2.png"
                      className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] w-[7%]"
                      alt="Vector"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                      bookings
                    </Text>
                    <Img
                      src="images/img_vector_3.png"
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] w-[4%]"
                      alt="Vector"
                    />
                    <Text className="cursor-pointer hover:font-normal font-normal lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                      Logout
                    </Text>
                  </Row>
                </Stack>
              </div>
            </header>
            <Img
              src="images/img_logo.png"
              className="absolute xl:h-[108px] h-[121px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] left-[0] rounded-radius605 w-[10%]"
              alt="logo"
            />
          </Stack>
          <div className="absolute bg-bluegray_100 border border-black_900 border-solid bottom-[0] lg:h-[122px] xl:h-[139px] h-[156px] 2xl:h-[157px] 3xl:h-[188px] inset-x-[0] mx-[auto] w-[94%]"></div>
        </Stack>
        <Row className="justify-between mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[92%]">
          <Text className="bg-blue_300 font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] mt-[4px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
            About This room
          </Text>
          <Column className="bg-bluegray_100 p-[4px] w-[30%]">
            <Text className="font-normal leading-[normal] lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[30%]">
              Adult cost:R500
              <br />
              Child cost:R150
            </Text>
          </Column>
        </Row>
        <Column className="w-[93%]">
          <Text className="font-normal lg:leading-[15px] xl:leading-[17px] leading-[20.00px] 2xl:leading-[20px] 3xl:leading-[24px] not-italic lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-gray_600 w-[76%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            sodales <br />
            purus id nisi eleifend mollis. Aliquam vehicula urna nisi, blandit
            aliquam nulla tempor vitae
            <br />. Sed dignissim, elit ultricies finibus elementum, ipsum neque
            dictum lacus, sit amet sodales risus nisi a est. Integer ullamcorper
            <br /> finibus est, a suscipit lacus molestie sit amet. Suspendisse
            vitae auctor sapien. Curabitur pretium turpis non augue viverra,
            eget vestibulum arcu eleifend. Mauris <br />
            tempus pellentesque quam. Nulla id mauris quis nibh ultricies
            aliquam sit amet non lectus. Vivamus quis urna ac sapien eleifend
            convallis quis ac sem. Curabitur ultricies non
            <br /> ligula quis pretium. Fusce maximus dui id dignissim
            venenatis.
          </Text>
          <Row className="justify-evenly mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] w-[100%]">
            <Column className="lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:pr-[347px] xl:pr-[397px] pr-[447px] 3xl:pr-[536px] w-[73%]">
              <Text className="border border-black_900 border-solid font-normal not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                Number of adults
              </Text>
              <Text className="border border-black_900 border-solid font-normal lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                Children
              </Text>
              <Text className="border border-black_900 border-solid font-normal lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                How many Rooms
              </Text>
            </Column>
            <Column className="bg-bluegray_100 justify-end lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px] w-[27%]">
              <Row className="lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] mr-[auto] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[33%]">
                <div className="bg-white_A700 lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[35%]"></div>
                <Text className="font-normal lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  wifi
                </Text>
              </Row>
              <Row className="items-center lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mr-[auto] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[30%]">
                <div className="bg-white_A700 lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[39%]"></div>
                <Text className="font-normal lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  TV
                </Text>
              </Row>
              <Row className="items-center lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[45%]">
                <div className="bg-white_A700 lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[26%]"></div>
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Dinner
                </Text>
              </Row>
              <Row className="items-center lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[65%]">
                <div className="bg-white_A700 lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[18%]"></div>
                <Text className="font-normal lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Breackfast
                </Text>
              </Row>
              <Row className="lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mr-[auto] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[51%]">
                <div className="bg-white_A700 lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] w-[23%]"></div>
                <Text className="font-normal lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Launch
                </Text>
              </Row>
            </Column>
          </Row>
          <Row className="justify-between lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] mt-[93px] w-[97%]">
            <Button className="bg-pink_400 font-normal lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] not-italic outline outline-[1px] outline-black_900_33 lg:py-[17px] xl:py-[20px] py-[23px] 3xl:py-[27px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 w-[30%]">
              Book Now
            </Button>
            <Text className="border border-black_900 border-solid font-normal 3xl:mb-[102px] lg:mb-[66px] xl:mb-[75px] mb-[85px] not-italic lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
              Total...
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default ReviewPage;
