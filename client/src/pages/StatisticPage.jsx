import Header from "../components/header/Header.jsx";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="statistic-cards grid grid-cols-4 my-10">
            <div className="card-item bg-gray-800 p-8 rounded-lg">
              <div className="flex gap-x-4">
                <div className="rounded-full bg-white w-16 h-16 p-3">
                  <img src="images/user.png" alt="" />
                </div>
                <div className="text-white">
                  <p className="mb-2 text-lg font-medium text-gray-400">Toplam Müşteri</p>
                  <p className="text-xl font-semibold text-gray-200">6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
