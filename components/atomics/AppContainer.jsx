const AppContainer = ({ children }) => (
  <div className="max-w-[1430px] mx-auto md:px-36">
    <div className="max-w-[1140px">
      <main className="max-w-[1000px] mx-auto relative z-20">{children}</main>
    </div>
  </div>
);

AppContainer.propTypes = {};

export default AppContainer;
