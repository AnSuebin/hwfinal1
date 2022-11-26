import styled from "./WorkingForm.module.css";

const WorkingForm = ({
  WorkandDonelist,
  OnClickToDelete,
  OnClickToAnother,
  buttonText,
}) => {
  return (
    <div className={styled.workingsContainer}>
      {WorkandDonelist.map((work) => {
        return (
          <div className={styled.container} key={work.id}>
            <h3 className={styled.title}>#{work.title}</h3>
            <hr className={styled.line} />
            <p className={styled.context}>{work.context}</p>
            <div className={styled.buttonContainer}>
              <button
                className={styled.button}
                onClick={function () {
                  OnClickToDelete(work.id);
                }}
              >
                삭제하기
              </button>
              <button
                className={styled.button}
                onClick={function () {
                  OnClickToAnother(work.id);
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkingForm;
