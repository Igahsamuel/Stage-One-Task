import Profile from "../src/assets/img/profile__img.jpg";
import Avatar from "../src/assets/img/_Avatar share button.jpg";
import KodeCampLogo from "../src/assets/img/kodecamp logo white 3.jpg";
import KodeHauz from "../src/assets/img/kodeHauz Logo 1.jpg";
import Slack from "../src/assets/img/slack.jpg";
import SocialIcon from "../src/assets/img/Social icon.jpg";
import SmallScreen from "../src/assets/img/smallscreen.jpg";
export default function App() {
  return (
    <div className="mx-[30px] md:mx-[40px] mt-[40px]">
      <div className="flex items-center flex-col justify-center h-[80vh]">
        <div className="flex justify-evenly ml-[90px] md:ml-[250px]  md:space-x-[200px]">
          <div>
            <img src={Profile} alt="" />
            <p className="font-bold">John Doe</p>
          </div>
          <div className="ml-[40px]">
            <img src={Avatar} alt="avatar" className="hidden md:block" />
            <img
              src={SmallScreen}
              alt="smallscreen"
              className="block md:hidden"
            />
          </div>
        </div>
        <ButtonPage />
        <div className="flex my-[40px]">
          <img src={Slack} alt="slack" />
          <img src={SocialIcon} alt="social-icon" className="ml-5" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ButtonPage() {
  return (
    <>
      <Button name="Twitter Link" />
      <Button name="KodeCamp Team" />
      <Button name="KodeCamp Books" />
      <Button name="Python Books" />
      <Button name="Background Check for Coders" />
      <Button name="Design books" />
    </>
  );
}

function Button({ name }) {
  return (
    <div className="w-full">
      <button className="border py-2 my-2 px-5 w-full bg-gray-200 rounded-md">
        {name}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center md:text-center">
      <div>
        <img src={KodeCampLogo} alt="" />
      </div>
      <div>
        <p className="md:ml-[80px] text-gray-400">KodeCamp Internship Task</p>
      </div>
      <div>
        <img src={KodeHauz} alt="" />
      </div>
    </div>
  );
}
