import { faqSmall } from "../utils/faq.js";

const FaqContentSmall = (props) => {
  return (
    <div className={`w-full ${props.className ? props.className : ""}`}>
      {faqSmall.map((faq, index) => {
        const { question, answer } = faq;
        return (
          <div key={question} className="my-[15px]">
            <h4 className="text-lg lg:text-xl font-bold leading-[26px] lg:leading-[21.6px]">
              {index + 1}. {question}
            </h4>
            <p className="text-base lg:font-medium  mt-[10px] lg:mb-3 leading-[25.6px] ">
              {answer}
            </p>
            <div className="bg-divider opacity-60 w-full h-[1px] my-[15px]"></div>
          </div>
        );
      })}
    </div>
  );
};
export default FaqContentSmall;
