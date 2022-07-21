import React from "react";

import { Stack, Img, Column, Text, Button, Row } from "components";

const AdminsigninPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] pr-[4px] w-[100%]">
        <Img
          src="images/img_vector_4.png"
          className="absolute h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[100%]"
          alt="Vector"
        />
        <Stack className="absolute lg:h-[557px] xl:h-[637px] h-[716px] 2xl:h-[717px] 3xl:h-[860px] inset-x-[0] mx-[auto] top-[3%] w-[92%]">
          <Column className="absolute bg-blue_300 bottom-[0] items-center justify-end lg:p-[28px] xl:p-[32px] p-[37px] 3xl:p-[44px] right-[6%] rounded-radius10 w-[80%]">
            <Text className="bg-light_blue_700 font-normal lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
              Admin Name
            </Text>
            <Text className="bg-light_blue_700 font-normal mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
              Password
            </Text>
            <Button className="bg-pink_400 font-normal lg:mt-[110px] xl:mt-[126px] mt-[142px] 3xl:mt-[170px] not-italic outline outline-[1px] outline-black_900_33 py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 w-[22%]">
              submit
            </Button>
          </Column>
          <Img
            src="images/img_logo_1.png"
            className="absolute lg:h-[150px] xl:h-[171px] h-[192px] 2xl:h-[193px] 3xl:h-[231px] left-[0] rounded-radius10944 top-[0] w-[16%]"
            alt="logo"
          />
          <Row className="absolute items-center justify-between right-[0] top-[3%] w-[50%]">
            <Button className="bg-bluegray_900 font-normal not-italic outline outline-[1px] outline-black_900_33 lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-pink_400 w-[38%]">
              Registstation
            </Button>
            <Button className="bg-bluegray_900 font-normal not-italic outline outline-[1px] outline-black_900_33 lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius4 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-pink_400 w-[41%]">
              User login
            </Button>
          </Row>
        </Stack>
      </Stack>
    </>
  );
};

export default AdminsigninPage;
