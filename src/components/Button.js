const Button = ({ color = "#7853F6", text = "hi", addWorksHandler }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: color,
          border: "none",
          width: "100px",
          borderRadius: "5px",
          fontWeight: "700",
          color: "whitesmoke",
          fontSize: "12px",
          padding: "10px",
        }}
        onClick={addWorksHandler}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
