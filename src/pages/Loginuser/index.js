import React from "react";

import { Column, Row, Stack, Img, Button, Text } from "components";

const LoginuserPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter justify-end mx-[auto] lg:p-[63px] xl:p-[72px] p-[81px] 3xl:p-[97px] w-[100%]">
        <Column className="items-center lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mr-[16px] xl:mr-[18px] mr-[21px] 3xl:mr-[25px] lg:mt-[44px] xl:mt-[50px] mt-[57px] 3xl:mt-[68px] w-[97%]">
          <Row className="bg-blue_300 lg:pb-[6px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] w-[100%]">
            <Column className="lg:mb-[49px] xl:mb-[56px] mb-[63px] 3xl:mb-[75px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] w-[61%]">
              <Stack className="bg-bluegray_100 lg:h-[218px] xl:h-[250px] h-[280px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] rounded-radius50 w-[100%]">
                <Img
                  src="images/img_logo_2.png"
                  className="absolute lg:h-[166px] xl:h-[190px] h-[213px] 2xl:h-[214px] 3xl:h-[256px] left-[8%] rounded-radius144 top-[0] w-[43%]"
                  alt="logo"
                />
              </Stack>
              <Button className="bg-pink_400 font-normal lg:ml-[359px] xl:ml-[410px] ml-[462px] 3xl:ml-[554px] lg:mr-[31px] xl:mr-[35px] mr-[40px] 3xl:mr-[48px] lg:mt-[212px] xl:mt-[242px] mt-[273px] 3xl:mt-[327px] not-italic outline outline-[1px] outline-black_900_33 py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 w-[30%]">
                submit
              </Button>
            </Column>
            <Column className="items-center lg:mb-[213px] xl:mb-[243px] mb-[274px] 3xl:mb-[328px] lg:mt-[42px] xl:mt-[48px] mt-[55px] 3xl:mt-[66px] w-[39%]">
              <Button className="bg-bluegray_900 font-normal not-italic outline outline-[1px] outline-black_900_33 lg:py-[17px] xl:py-[20px] py-[23px] 3xl:py-[27px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-pink_400 w-[69%]">
                Admin login
              </Button>
              <Column className="items-center mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] w-[100%]">
                <Text className="bg-light_blue_700 font-normal lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Name
                </Text>
                <Text className="bg-light_blue_700 font-normal lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Pasword
                </Text>
              </Column>
            </Column>
          </Row>
        </Column>
        <Text className="font-normal lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] lg:mr-[119px] xl:mr-[136px] mr-[153px] 3xl:mr-[183px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] not-italic lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
          <span className="text-black_900 font-inter">
            dont have an account why not register{" "}
          </span>
          <span className="text-indigo_A700 font-inter">here</span>
        </Text>
      </Column>
    </>
  );
};

export default LoginuserPage;
