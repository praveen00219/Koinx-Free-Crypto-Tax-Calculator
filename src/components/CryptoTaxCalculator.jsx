import { useState } from "react";
import { investmentTypeTerm } from "../utils/investTypeTerm";
import FlagSelect from "./FlagSelect";

const CryptoTaxCalculator = () => {
  // state for reading input
  const [inputValues, setInputValues] = useState({
    purchasePrice: "",
    salePrice: "",
    expenses: "",
  });

  // state for setting active btn
  const [btnIndex, setBtnIndex] = useState(1);

  // state for annual income
  const [selectedAnnualIncomeOption, setSelectedAnnualIncomeOption] =
    useState("$0 - $18,200");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // Check if value is a number and limit to a maximum of 5 digits
    if (!isNaN(value) && value.length <= 5) {
      // Remove the negative symbol
      // Use parseFloat to handle decimal input
      const sanitizedValue = Math.abs(parseFloat(value));
      // Update the inputValues object
      setInputValues({
        ...inputValues,
        [name]: sanitizedValue.toString(), // to fix Received NaN for the `value` attribute. If this is expected, cast the value to a string.
      });
    }
  };

  const handleBtnIndex = (index) => {
    setBtnIndex(index);
  };

  // Function to handle annual income option change
  const handleAnnualIncomeChange = (event) => {
    setSelectedAnnualIncomeOption(event.target.value);
  };

  // Function to calculate the tax rate based on the selected option
  const calculateTaxRate = (selectedOption) => {
    switch (selectedOption) {
      case "$0 - $18,200":
        return 0; // 0%
      case "$18,201 - $45,000":
        return 0.19; // 19%
      case "$45,001 - $120,000":
        return 0.325; // 32.5%
      case "$120,001 - $180,000":
        return 0.37; // 37%
      case "$180,001+":
        return 0.45; // 45%
      default:
        return 0; // Default to 0%
    }
  };

  // Function to calculate tax details text based on the selected option to display on UI
  const calculateTaxDetails = (selectedOption) => {
    switch (selectedOption) {
      case "$0 - $18,200":
        return "0% - No tax";
      case "$18,201 - $45,000":
        return "Nil + 19% of excess over $18,200";
      case "$45,001 - $120,000":
        return "$5,092 + 32.5% of excess over $45,000";
      case "$120,001 - $180,000":
        return "$29,467 + 37% of excess over $120,000";
      case "$180,001+":
        return "$51,667 + 45% of excess over $180,000";
      default:
        return "Invalid option";
    }
  };

  let { purchasePrice, salePrice, expenses } = inputValues;
  // to fix bug showing NaN when input field is cleared
  // if invalid number change to 0
  if (isNaN(purchasePrice)) {
    purchasePrice = 0;
  }
  if (isNaN(salePrice)) {
    salePrice = 0;
  }
  if (isNaN(expenses)) {
    expenses = 0;
  }

  // capital gains amount
  const capitalGainsAmount = salePrice - purchasePrice - expenses;

  // discount for long term gains
  let discountForLongTermGains = 0;
  if (capitalGainsAmount > 0 && btnIndex === 1) {
    discountForLongTermGains = 0.5 * capitalGainsAmount;
  }

  // calculate Net Capital Gains Amount
  const netCGA =
    btnIndex === 0
      ? capitalGainsAmount
      : capitalGainsAmount - discountForLongTermGains;

  // Calculate the tax rate based on the selected option
  const taxRate = calculateTaxRate(selectedAnnualIncomeOption);

  // Calculate the tax you need to pay by multiplying net capital gains by the tax rate
  const taxToPay = netCGA * taxRate;

  return (
    <div className="w-[99%] sm:w-full xl:w-[55.0625rem] max-w-[55.0625rem] mx-auto bg-white  xl:mt-7 xl:mb-5 rounded-2xl p-[1.0625rem] xl:pt-[2.1875rem] xl:pb-[3.625rem] xl:ps-[4.9375rem] xl:pe-[4.5625rem] border border-border-gray xl:border-none">
      <h1 className=" font-bold text-2xl leading-[2.125rem] text-center pb-7 lg:pb-10">
        Free Crypto Tax Calculator Australia
      </h1>

      <div className=" w-full max-w-[44.5625rem] flex flex-col gap-7  ">
        {/* first row */}
        <div className="flex gap-5 xl:gap-10">
          {/* financial entry */}
          <div className=" flex w-full flex-col sm:flex-row sm:justify-between sm:items-center">
            <label className="text-f-primary text-sm lg:text-[0.9375rem] w-40 ">
              Financial Year
            </label>
            <div className="bg-default-gray w-full h-10 pe-4 max-w-[17.0625rem] md:h-12  rounded-lg">
              <select className="bg-default-gray w-full h-full   p-3 rounded-lg outline-none">
                <option className="text-f-primary text-base font-medium ">
                  FY 2023-24
                </option>
              </select>
            </div>
          </div>
          {/* country */}
          <div className=" flex w-full flex-col sm:flex-row sm:gap-2 sm:items-center h-10 md:h-12">
            <label className="text-f-primary text-sm lg:text-[0.9375rem]">
              Country
            </label>
            <FlagSelect />
          </div>
        </div>
        {/* end of first row */}
        {/* divider */}
        <div className="bg-divider opacity-60 w-full h-[1px]"></div>
        {/* end of divider */}
        {/* second row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 ">
          {/* Purchase Price */}
          <div className=" flex flex-col gap-[6px] w-full ">
            <label className="text-f-primary text-[0.9375rem] ">
              Enter purchase price of Crypto
            </label>
            <div className="flex  items-center bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium">
              <span>$</span>
              <input
                type="number"
                placeholder="0"
                value={inputValues.purchasePrice}
                name="purchasePrice"
                onChange={(event) => handleInputChange(event)}
                className="bg-default-gray w-full h-full px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium  outline-none"></input>
            </div>
          </div>
          {/* Sale Price */}
          <div className=" flex flex-col gap-[6px] w-full ">
            <label className="text-f-primary text-[0.9375rem]">
              Enter sale price of Crypto
            </label>
            <div className="flex items-center bg-default-gray h-10   md:h-12 w-full px-4 py-2 md:p-3 rounded-lg">
              <span>$</span>
              <input
                className="bg-default-gray w-full h-full px-4 py-2 md:p-3    text-f-primary text-base font-medium outline-none"
                type="number"
                placeholder="0"
                value={inputValues.salePrice}
                name="salePrice"
                onChange={(event) => handleInputChange(event)}></input>
            </div>
          </div>
        </div>
        {/* end of second row */}
        {/* third row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          {/* Expenses */}
          <div className=" flex flex-col gap-[6px] w-full ">
            <label className="text-f-primary text-[0.9375rem] ">
              Enter your Expenses
            </label>
            <div className="flex items-center bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
              <span>$</span>
              <input
                className="bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg text-f-primary text-base font-medium outline-none"
                type="number"
                placeholder="0"
                value={inputValues?.expenses}
                name="expenses"
                onChange={(event) => handleInputChange(event)}></input>
            </div>
          </div>
          {/* Investment type */}
          <div className="  w-full ">
            <p className="text-f-primary text-sm pb-[6px] leading-6">
              Investment Type
            </p>
            {/* button  */}
            <div className=" flex  w-full gap-[10px] items-center">
              {investmentTypeTerm?.map((type, index) => (
                <div
                  key={type?.title}
                  onClick={() => handleBtnIndex(index)}
                  className="flex flex-col w-full">
                  <button
                    className={`text-xs md:text-lg  ps-3 pe-1 sm:pe-0 py-[12.5px] lg:py-[17px]   font-medium rounded-lg mb-1 flex-1 flex sm:justify-center lg:justify-normal items-center gap-4 ${
                      index === btnIndex
                        ? "border-2 border-default-blue bg-default-blue text-default-blue bg-opacity-5"
                        : "border  border-btn-border-gray"
                    } `}>
                    {index === btnIndex ? (
                      <>
                        {type?.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-4 h-4 md:w-6 md:h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </>
                    ) : (
                      type?.title
                    )}
                  </button>
                  <p className="text-[13px] lg:text-[15px] font-medium text-btn-border-gray leading-6">
                    {type?.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end of third row */}
        {/* fourth row */}
        <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-10">
          {/* Annual Income*/}
          <div className=" flex flex-col gap-[6px] w-full ">
            <label className="text-f-primary text-sm text-[0.9375rem] mb-[6px]">
              Select Your Annual Income
            </label>
            <div className="bg-default-gray w-full h-10  md:h-12 pe-4  rounded-lg">
              <select
                className="bg-default-gray w-full h-full  px-4 py-2 md:h-12 md:p-3 rounded-lg outline-none font-medium text-base lg:text-lg"
                value={selectedAnnualIncomeOption}
                onChange={handleAnnualIncomeChange}>
                <option value="$0 - $18,200">$0 - $18,200</option>
                <option value="$18,201 - $45,000">$18,201 - $45,000</option>
                <option value="$45,001 - $120,000">$45,001 - $120,000</option>
                <option value="$120,001 - $180,000">$120,001 - $180,000</option>
                <option value="$180,001+">$180,001+</option>
              </select>
            </div>
          </div>
          {/* Tax rate */}
          <div className=" flex items-center gap-2 lg:flex-col  lg:self-end    w-full ">
            <p className="text-xs lg:text-sm text-btn-border-gray leading-6 self-start">
              Tax Rate:
            </p>
            <p className="text-xs lg:text-sm text-btn-border-gray lg:self-start">
              {calculateTaxDetails(selectedAnnualIncomeOption)}
            </p>
          </div>
        </div>
        {/* end fourth row */}
        {/* fifth row */}
        {/* hide  Capital gains amount &  Discount for long term gains when short term is selected */}
        {btnIndex == 1 && (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            {/*  Capital gains amount */}
            <div className=" flex flex-col gap-[6px] w-full ">
              <label className="text-f-primary text-[0.9375rem] ">
                Capital gains amount
              </label>
              <div className=" bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
                {/* if negative value put -ve before $ */}
                {capitalGainsAmount < 0
                  ? `- $ ${Math.abs(capitalGainsAmount)}`
                  : `$ ${capitalGainsAmount}`}
              </div>
            </div>
            {/* Discount for long term gains */}
            <div className=" flex flex-col gap-[6px] w-full ">
              <label className="text-f-primary text-[0.9375rem]">
                Discount for long term gains
              </label>
              <div className=" bg-default-gray w-full  h-10 px-4 py-2  md:h-12 md:p-3 rounded-lg">
                $ {discountForLongTermGains}
              </div>
            </div>
          </div>
        )}

        {/* end of fifth row */}
        {/* sixth row */}
        <div className="px-7 pt-9 lg:px-0 lg:pt-0 lg:flex lg:flex-row lg:items-center lg:gap-10">
          {/* Net Capital gains tax amount */}
          <div className="bg-green-btn pt-5 pb-[17px] px-9 rounded-lg mb-5 lg:mb-0 lg:flex-1 ">
            <p className="text-base text-f-primary mb-2  w-[221px] mx-auto font-medium">
              Net Capital gains tax amount
            </p>
            <p className="font-bold text-2xl text-green-btn-text text-center">
              {isNaN(netCGA)
                ? "$0" // If 'netCGA' is not a number, display "$0"
                : netCGA < 0 //if less than 0 ?
                ? `- $${Math.abs(netCGA)}` //If -ve, put -ve before $
                : `$${netCGA}`}
            </p>
          </div>
          {/* The tax you need to pay */}
          <div className="bg-btn-blue py-5 px-9  rounded-lg mx-auto lg:flex-1">
            <p className="text-base text-f-primary mb-2 w-[221px] mx-auto  font-medium">
              The tax you need to pay*
            </p>
            <p className="font-bold text-2xl text-blue-btn-text text-center">
              {taxToPay
                ? taxToPay < 0 //if less than 0
                  ? `-$${Math.abs(taxToPay).toFixed(3)}` //If -ve, put -ve before $
                  : `$${taxToPay.toFixed(3)}`
                : "$0"}
            </p>
          </div>
        </div>
        {/* end of sixth row */}
      </div>
    </div>
  );
};
export default CryptoTaxCalculator;
