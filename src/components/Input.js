import Button from "./Button";
import styled from "./Input.module.css";

const Input = ({
  title,
  context,
  setTitle,
  setContext,
  addWorksHandler,
  OnClickToDelete,
}) => {
  return (
    <div className={styled.inputContainer}>
      <form>
        <label htmlFor="title" className={styled.lable}>
          제목
        </label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
          className={styled.input}
          onChange={(e) => setTitle(e.target.value)}
          // 추가 후 빈값으로 설정하기 위해서
          // 콘솔에러가 뜨는데 처음 타이틀에 아무것도 없을 때는 '' 빈값으로
          value={title || ""}
        ></input>
        <label htmlFor="context" className={styled.lable}>
          내용
        </label>
        <input
          type="text"
          id="context"
          placeholder="내용을 입력해주세요"
          className={styled.input}
          onChange={(e) => setContext(e.target.value)}
          value={context || ""}
        ></input>
      </form>
      <Button text="추가하기" addWorksHandler={addWorksHandler} />
    </div>
  );
};

export default Input;
