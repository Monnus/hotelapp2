import React from "react";

import { Column, Text, Row, Button } from "components";

const SigninPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:pb-[21px] xl:pb-[24px] pb-[28px] 3xl:pb-[33px] lg:px-[21px] xl:px-[24px] px-[28px] 3xl:px-[33px] w-[100%]">
        <Text className="font-normal lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mr-[548px] xl:mr-[627px] mr-[705px] 3xl:mr-[846px] not-italic lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
          Welcomed to Crown Plaza Hotel best hotel booking made easy simple
        </Text>
        <Text className="font-normal lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] 3xl:mr-[1048px] lg:mr-[679px] xl:mr-[776px] mr-[873px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-deep_purple_900 w-[auto]">
          with afordable price best accomadations available
        </Text>
        <Column className="items-center lg:mr-[27px] xl:mr-[31px] mr-[35px] 3xl:mr-[42px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[97%]">
          <Column className="w-[100%]">
            <Row className="justify-between w-[100%]">
              <Column className="bg-blue_300 border border-black_900 border-solid justify-center lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] rounded-radius70 shadow-bs w-[48%]">
                <Text className="bg-light_blue_700 font-normal lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius3001 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Name
                </Text>
                <Text className="bg-light_blue_700 font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius3001 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Surname
                </Text>
                <Text className="bg-light_blue_700 font-normal xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius3001 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Number
                </Text>
                <Text className="bg-light_blue_700 font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius3001 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  ID Number
                </Text>
                <Text className="bg-light_blue_700 font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius3001 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Email
                </Text>
                <Text className="bg-light_blue_700 font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius3001 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Password
                </Text>
                <Row className="items-end justify-end lg:mb-[114px] xl:mb-[130px] mb-[147px] 3xl:mb-[176px] lg:ml-[179px] xl:ml-[205px] ml-[231px] 3xl:ml-[277px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[60%]">
                  <Button className="bg-light_blue_700 font-normal lg:py-[21px] xl:py-[24px] py-[27px] 3xl:py-[32px] rounded-radius30 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 text-center w-[48%]">
                    Image
                  </Button>
                  <Button className="bg-light_blue_700 font-normal lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius30 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 text-center w-[39%]">
                    AGE
                  </Button>
                </Row>
              </Column>
              <Button className="bg-bluegray_900 font-normal lg:mb-[528px] xl:mb-[604px] mb-[679px] 3xl:mb-[815px] not-italic outline outline-[1px] outline-black_900_33 lg:py-[17px] xl:py-[20px] py-[23px] 3xl:py-[27px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-pink_400 w-[24%]">
                Admin login
              </Button>
            </Row>
            <Column className="bg-pink_400 items-center lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] outline outline-[1px] outline-black_900_33 p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius4 w-[16%]">
              <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                submit
              </Text>
            </Column>
            <Text className="font-normal leading-[normal] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[58%]">
              <span className="text-black_900 font-inter">
                already have an account Signin{" "}
              </span>
              <span className="text-indigo_A700 font-inter">here</span>
            </Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SigninPage;
