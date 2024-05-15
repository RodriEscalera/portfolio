import React, { FC } from "react";
import style from "./JobContainer.module.css";
import HelperText from "../HelperText/HelperText";

interface JobContainerProps {
  jobName: string;
  companyName: string;
  features: string[];
  workPeriod: string;
  stack?: string[];
  year: string;
}

const JobContainer: FC<JobContainerProps> = ({
  jobName,
  companyName,
  features,
  workPeriod,
  stack,
  year,
}) => {
  return (
    <>
      <div className={style["divider"]}>
        <hr className={style["hr"]} />
        <h1 className={style["work-period"]}>{workPeriod}</h1>
        <hr className={style["hr"]} />
      </div>
      <div className={style["job"]}>
        <div className={style["time-line"]}>
          <HelperText date={year} />
          <div className={style.circle} />
          <div className={style.line} />
        </div>

        <div className={style["job-info"]}>
          <div className={style["job-header"]}>
            <h1 className={style["job-title"]}>{jobName}</h1>

            <h1 className={style["job-period"]}>{workPeriod}</h1>
          </div>

          <h2 className={style["job-name"]}>{companyName}</h2>

          <div className={style["card-back-stack"]}>
            {stack &&
              stack.map((tecnology: string, index: number) => (
                <div key={index} className={style["card-back-technology"]}>
                  {tecnology}
                </div>
              ))}
          </div>

          <div className="mt-[0.5rem]">
            {features.map((feature: string, index: number) => (
              <p key={index} className={style["job-description"]}>
                • {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobContainer;
