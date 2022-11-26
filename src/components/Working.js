import styled from "./Working.module.css";
import WorkingForm from "./WorkingForm";

const Working = ({
  WorkandDonelist,
  OnClickToDelete,
  OnClickToDone,
  OnClickToNotDone,
}) => {
  return (
    <>
      <div className={styled.container}>
        <h3>Working..🔥</h3>
        <WorkingForm
          WorkandDonelist={WorkandDonelist.filter((work) => {
            return work.done === false;
          })}
          OnClickToDelete={OnClickToDelete}
          OnClickToAnother={OnClickToDone}
          buttonText="완료"
        />
      </div>
      <div className={styled.container}>
        <h3>Done..!🎉</h3>
        <WorkingForm
          WorkandDonelist={WorkandDonelist.filter((work) => {
            return work.done === true;
          })}
          OnClickToDelete={OnClickToDelete}
          OnClickToAnother={OnClickToNotDone}
          buttonText="취소"
        />
      </div>
    </>
  );
};

export default Working;
