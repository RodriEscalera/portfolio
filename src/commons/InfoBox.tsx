import React, { FC } from "react";

type list = {
  title: string;
  highlights: string[];
};
interface IInfoBox {
  positionName: string;
  companyName: string;
  date: string;
  contentList: list[];
}

const InfoBox: FC<IInfoBox> = ({
  positionName,
  companyName,
  date,
  contentList,
}) => {
  return (
    <div className="h-full w-full rounded-3xl bg-darkGreen p-3 ">
      <div id="layout" className="w-full h-full flex flex-col">
        <div>
          <h2 className="text-3xl text-center">{positionName}</h2>
        </div>
        <div>
          <h3 className="ml-10">{companyName}</h3>
          <h4 className="ml-14">{date}</h4>

          {contentList.map((list) => (
            <>
              <h4 className="ml-20">{list.title}:</h4>
              <ul>
                {list.highlights.map((element, key) => (
                  <li key={key}>• {element}</li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
