import React from "react"; 
import { id_image } from "components/landingPageComponents/middle";
import { List, Row, Column, Text, Input, Img } from "components";
import { caputureReviewDetail } from "pages/Review";

const BookingspagePage = () => {
  console.log("id_image",id_image,caputureReviewDetail)
  return (
    <>
      <List
        className="bg-bluegray_100 font-inter gap-[0] min-h-[auto] mx-[auto] lg:py-[22px] xl:py-[25px] py-[29px] 3xl:py-[34px] w-[100%]"
        orientation="vertical" 
      >
        <Row className="bg-white_A700 items-center lg:my-[19px] xl:my-[21px] my-[24.5px] 2xl:my-[24px] 3xl:my-[29px] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]">
          <Column className="lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:pr-[396px] xl:pr-[453px] pr-[510px] 3xl:pr-[612px] w-[69%]">
            <Text className="bg-bluegray_101 font-normal pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              @Hotel Crown PLaza
            </Text>
            <Input
              className="bg-transparent border-0 font-normal lg:pb-[21px] xl:pb-[24px] pb-[27px] 3xl:pb-[32px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 w-[100%]"
              wrapClassName="3xl:mt-[15px] bg-bluegray_101 lg:mt-[10px] mt-[13px] rounded-radius10 w-[99%] xl:mt-[11px]"
              name="Frame9"
              placeholder={
                <>
                  Payment Method: Price:R3000
                  <br /> Paid:R0.00
                </>
              }
            ></Input>
            <Column className="bg-bluegray_101 lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[99%]">
              <Text className="font-normal leading-[normal] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[26%]">
                Room type:
                <br />
                Room :X_
              </Text>
            </Column>
            <Column className="bg-bluegray_101 lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
              <Text className="font-normal leading-[normal] lg:mb-[59px] xl:mb-[67px] mb-[76px] 3xl:mb-[91px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[92%]">
                stay:7days adults:2
                <br />
                <br />
                <br />
                hospitalization:luxery: children:0
              </Text>
            </Column>
          </Column>
          <Column className="items-center w-[29%]">
            <Img
              src="images/img_previewimg.png"
              className="lg:h-[181px] xl:h-[207px] h-[232px] 2xl:h-[233px] 3xl:h-[279px] w-[100%]"
              alt="previewImg"
            />
            <Row className="items-center justify-between lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] w-[100%]">
              <Img
                src="images/img_icbaselinecan.png"
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] w-[50%]"
                alt="icbaselinecan"
              />
              <Img
                src="images/img_iconparksolid.png"
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] w-[38%]"
                alt="iconparksolid"
              />
            </Row>
          </Column>
        </Row>
        <Row className="bg-white_A700 items-center lg:my-[19px] xl:my-[21px] my-[24.5px] 2xl:my-[24px] 3xl:my-[29px] lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px] w-[100%]">
          <Column className="lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:pr-[396px] xl:pr-[453px] pr-[510px] 3xl:pr-[612px] w-[69%]">
            <Text className="bg-bluegray_101 font-normal pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius10 lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              @Hotel Crown PLaza
            </Text>
            <Input
              className="bg-transparent border-0 font-normal lg:pb-[21px] xl:pb-[24px] pb-[27px] 3xl:pb-[32px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 w-[100%]"
              wrapClassName="3xl:mt-[15px] bg-bluegray_101 lg:mt-[10px] mt-[13px] rounded-radius10 w-[99%] xl:mt-[11px]"
              name="Frame9"
              placeholder={
                <>
                  Payment Method: Price:R3000
                  <br /> Paid:R0.00
                </>
              }
            ></Input>
            <Column className="bg-bluegray_101 lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[99%]">
              <Text className="font-normal leading-[normal] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[26%]">
                Room type:
                <br />
                Room :X_
              </Text>
            </Column>
            <Column className="bg-bluegray_101 lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
              <Text className="font-normal leading-[normal] lg:mb-[59px] xl:mb-[67px] mb-[76px] 3xl:mb-[91px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-black_900 w-[92%]">
                stay:3days adults:2
                <br />
                <br />
                <br />
                hospitalization:luxery: children:0
              </Text>
            </Column>
          </Column>
          <Column className="items-center w-[29%]">
            <Img
              src="images/img_previewimg_1.png"
              className="lg:h-[181px] xl:h-[207px] h-[232px] 2xl:h-[233px] 3xl:h-[279px] w-[100%]"
              alt="previewImg"
            />
            <Row className="items-center justify-between lg:mt-[38px] xl:mt-[43px] mt-[49px] 3xl:mt-[58px] w-[100%]">
              <Img
                src="images/img_icbaselinecan_1.png"
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] w-[50%]"
                alt="icbaselinecan"
              />
              <Img
                src="images/img_iconparksolid_1.png"
                className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] w-[38%]"
                alt="iconparksolid"
              />
            </Row>
          </Column>
        </Row>
      </List>
    </>
  );
};

export default BookingspagePage;
