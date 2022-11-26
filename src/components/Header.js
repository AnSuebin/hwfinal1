import styled from "./Header.module.css";

const Header = () => {
  return (
    <div className={styled.HeaderContainer}>
      <div className={styled.title}>My Todo List</div>
      <div className={styled.title}>React</div>
    </div>
  );
};

export default Header;
