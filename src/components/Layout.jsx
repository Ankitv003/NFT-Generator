const Layout = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        color: "white",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
