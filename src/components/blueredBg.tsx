const BluredBg = () => {
  return (
    <>
      <div
        className="absolute inset-x-0 -top-40  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="gradient-box relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]   sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-50rem)] -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div className="gradient-box relative left-[calc(50%-30rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </>
  );
};

export default BluredBg