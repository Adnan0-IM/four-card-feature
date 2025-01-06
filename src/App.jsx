import supervisor from "../public/images/icon-supervisor.svg";
import teamBuilder from "../public/images/icon-team-builder.svg";
import karma from "../public/images/icon-karma.svg";
import calculator from "../public/images/icon-calculator.svg";

function App() {
  return (
    <>
      <main className="font-poppins  grid m-4  gap-8 ">
        <section className="">
          <h1 className=" text-3xl font-thin text-center leading-normal">
            Reliable, efficient delivery <br />
            <span className=" font-normal"> Powered by Technology</span>
          </h1>

          <p className=" text-gray-600 text-center mt-4">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </section>

        <section className="mt-6 grid tablet:grid-cols-2 desktop:grid-cols-3 gap-8 desktop:grid-rows-4 w-2/3 m-auto h-auto">
          <div className="bg-white border-t-4 border-Cyan  rounded-lg shadow-xl flex flex-col gap-4 p-5 desktop:col-start-1 desktop:col-end-2 desktop:row-start-2 desktop:row-end-4">
            <h2 className="text-xl font-bold">Supervisor </h2>
            <p className="text-gray-600">
              Monitors activity to identify project roadblocks
            </p>
            <img
              className="mt-4 ml-auto"
              src={supervisor}
              alt="search icon "
              width={50}
              height={50}
            />
          </div>
          <div className="bg-white border-t-4 border-Red  rounded-lg shadow-xl flex flex-col gap-4 p-5 desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-3">
            <h2 className="text-xl font-bold">Team Builder </h2>
            <p className="text-gray-600">
              Scans our talent network to create the optimal team for your project
            </p>
            <img
              className="mt-4 ml-auto"
              src={teamBuilder}
              alt="team builder icon"
              width={50}
              height={50}
            />
          </div>
          <div className="bg-white border-t-4 border-Orange  rounded-lg shadow-xl flex flex-col gap-4 p-5 desktop:col-start-2 desktop:col-end-3 desktop:row-start-3 desktop:row-end-5">
            <h2 className="text-xl font-bold">Karma </h2>
            <p className="text-gray-600">
              Regularly evaluates our talent to ensure quality
            </p>
            <img
              className="mt-4 ml-auto"
              src={karma}
              alt="karma icon"
              width={50}
              height={50}
            />
          </div>
          <div className="bg-white border-t-4 border-Blue  rounded-lg shadow-xl flex flex-col gap-4 p-5 desktop:col-start-3 desktop:col-end-4 desktop:row-start-2 desktop:row-end-4">
            <h2 className="text-xl font-bold">Calculator </h2>
            <p className="text-gray-600">
              Uses data from past projects to provide better delivery estimates
            </p>
            <img
              className="mt-4 ml-auto"
              src={calculator}
              alt="calculator icon"
              width={50}
              height={50}
            />
          </div>
        </section>
      </main>

      <footer>
        <p className="attribution ">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Adnan iliyasu</a>.
        </p>
      </footer>
    </>
  );
}

export default App;