import { faqLarge } from "../utils/faq.js";

const FaqContentLarge = (props) => {
  return (
    <div className={`w-full ${props.className ? props.className : ""}`}>
      {faqLarge.map((faq, index) => {
        return (
          <div key={index} className="my-[15px]">
            {faq?.question && (
              <h4 className=" text-xl font-bold  leading-[21.6px]">
                {index + 1}. {faq?.question}
              </h4>
            )}

            <p className="text-base font-medium  mt-[10px] mb-3 leading-[25.6px] ">
              {faq?.answer}
            </p>
            <p className="text-base font-medium  mt-[10px] mb-3 leading-[25.6px] ">
              {faq?.answer2}
            </p>
            <ul className="text-base font-medium    leading-[25.6px] list-disc ps-4">
              {faq?.lists?.map((list, index) => {
                return (
                  <li className="mt-[10px]" key={index}>
                    <span className="font-bold ">{list?.listHead}</span>
                    {list?.listBody}
                  </li>
                );
              })}
            </ul>
            <p className="text-base font-medium  leading-[25.6px]">
              {faq?.paragraph}
            </p>
            <p className="text-base font-medium  leading-[25.6px]">
              {faq?.paragraph2}
            </p>
            <div>
              <h4 className="text-base font-medium  leading-[25.6px] mt-7">
                {faq?.numberListHead}
              </h4>
              {faq?.numberListBody?.map((body, index) => {
                return (
                  <p
                    className="text-base font-medium  leading-[25.6px]"
                    key={index}>
                    <span>{index + 1}.</span> {body}
                  </p>
                );
              })}
            </div>
            <div>
              <h4 className="text-base font-medium  leading-[25.6px] mt-7">
                {faq?.numberListHead2}
              </h4>
              {faq?.numberListBody2?.map((body, index) => {
                return (
                  <p
                    className="text-base font-medium  leading-[25.6px]"
                    key={index}>
                    <span>{index + 1}.</span> {body}
                  </p>
                );
              })}
            </div>
            <p className="text-sm   leading-[25.6px] mt-7">
              {faq?.doubts}{" "}
              <span className="text-default-blue underline cursor-pointer font-bold">
                {faq?.contact}
              </span>
            </p>
            <h5 className="font-bold text-btn-border-gray">
              {faq?.boldSubTitle}
            </h5>
            <p className="text-base font-medium  leading-[25.6px]">
              {faq?.paragraph3}
            </p>
            <h5 className="font-bold text-btn-border-gray mt-7">
              {faq?.boldSubTitle2}
            </h5>
            {faq?.image && (
              <img
                src={faq?.image}
                alt="annual income image"
                className="w-[606px] mt-4 mb-7"
              />
            )}
            {/* Capital Gains tax */}
            <h3 className=" font-bold text-xl leading-5">{faq?.CGTTitle}</h3>
            <p className="text-base font-medium  leading-[25.6px] mt-[10px] ">
              {faq?.CGTBody}
            </p>
            <h5 className="text-base font-bold  leading-[25.6px] my-7">
              {faq?.CGTFormula}
            </h5>
            <h5 className="text-base font-bold  leading-[25.6px] ">
              {faq?.note}
            </h5>
            <h5 className="text-base font-bold  leading-[25.6px] ">
              {faq?.capitalProceeds}
            </h5>
            <h5 className="text-base font-bold  leading-[25.6px] mb-7">
              {faq?.costBasis}
            </h5>

            <p className="text-base font-medium  leading-[25.6px]  ">
              {faq?.taxRate}
            </p>
            <p className="text-base font-medium  leading-[25.6px] my-7 ">
              {faq?.calculatorInfo}
            </p>
            <div className="bg-divider opacity-60 w-full h-[1px] my-[15px]"></div>
          </div>
        );
      })}
    </div>
  );
};
export default FaqContentLarge;
