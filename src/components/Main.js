import Input from "./Input";
import Working from "./Working";
// import Done from "./Done";
import { useState } from "react";
import uuid from "react-uuid";

const Main = () => {
  const [working, setWorking] = useState([]);

  const [title, setTitle] = useState();
  const [context, setContext] = useState();

  // 인풋에서 Working 리스트로 저장하는 함수
  const addWorksHandler = () => {
    const newWork = {
      // id 값 중복을 피하기 위해 uuid 사용
      // state로 아이디 값 받아와도 괜찮음
      id: uuid(),
      title: title,
      context: context,
      done: false,
    };
    setWorking([...working, newWork]);
    setTitle("");
    setContext("");
  };

  // Working 리스트에서 삭제하는 함수
  const OnClickToWorkDelete = (deleteid) => {
    setWorking(
      working.filter((work) => {
        return work.id !== deleteid;
      })
    );
  };

  // Working 리스트에서 Done 리스트로 넘기는 함수
  const OnClickToDone = (doneid) => {
    //findIndex에서 찾은 후, 다시 넣어주기
    const index = working.findIndex((todo) => todo.id === doneid);
    working[index].done = true;
    setWorking([...working]);
    // const filtering = working.filter((work) => {
    //   return work.id !== doneid;
    // });
    // const fix = working
    //   .filter((work) => {
    //     return work.id === doneid;
    //   })
    //   .map((work) => {
    //     return {
    //       id: work.id,
    //       title: work.title,
    //       context: work.context,
    //       done: true,
    //     };
    //   });

    // setWorking([...filtering, ...fix]);
  };

  // Done 리스트에서 Working 리스트로 넘기는 함수
  const OnClickToNotDone = (doneid) => {
    //findIndex에서 찾은 후, 다시 넣어주기
    const index = working.findIndex((todo) => todo.id === doneid);
    working[index].done = false;
    setWorking([...working]);

    // const filtering = working.filter((work) => {
    //   return work.id !== doneid;
    // });
    // const fix = working
    //   .filter((work) => {
    //     return work.id === doneid;
    //   })
    //   .map((work) => {
    //     return {
    //       id: work.id,
    //       title: work.title,
    //       context: work.context,
    //       done: false,
    //     };
    //   });

    // setWorking([...filtering, ...fix]);
  };

  return (
    <>
      <Input
        title={title}
        context={context}
        setTitle={setTitle}
        setContext={setContext}
        addWorksHandler={addWorksHandler}
      />
      <Working
        WorkandDonelist={working}
        OnClickToDelete={OnClickToWorkDelete}
        OnClickToDone={OnClickToDone}
        OnClickToNotDone={OnClickToNotDone}
      />
    </>
  );
};

export default Main;
