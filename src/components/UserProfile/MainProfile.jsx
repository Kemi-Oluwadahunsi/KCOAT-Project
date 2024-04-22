import Button from "../StaticComponents/Button";
// import userdp from "../../assets/Ellipse-4.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../hooks/ProductContext";

const MainProfile = () => {
 
 const {isLoading, userProfile} = useContext(ProductContext)

  return (
    <div className="pt-[8rem] xs:px-[2rem] px-[15em]">
      <div className="flex flex-col xs:gap-[1em] gap-[3em] font-oxygen pb-[5em]">
        <div className="flex justify-between">
          <h1 className="text-color xs:text-[base] text-[2rem] font-bold">My Profile</h1>
          <Link to="/edit-profile">
            <Button
              className={
                " text-tertiary2 xs:w-[5em] w-[10em] bg-tertiary rounded-lg flex items-center justify-center hover:scale-105 xs:hover:scale-0 xs:text-base text-lg"
              }
            >
              Edit
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="loader"></div>
        ) : userProfile ? (
          <div key={userProfile.customerId} className="flex flex-col xs:gap-[1em]] gap-[3em]">
            <div className=" flex xs:flex-col gap-8 border border-tertiary rounded-3xl xs:py-[1em] py-[2em] xs:px-[2em] px-[5em] ">
              <div>
                <img src={userProfile.image} alt="User-Image" />

              </div>
              {/* {userProfile.image} */}
              <div className="flex flex-col gap-4 xs:gap-2 xs:text-base text-[1.5em] font-bold  justify-center">
                <h1>
                  {userProfile.firstName} {userProfile.lastName}
                </h1>
                <p>{userProfile.address}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 border border-tertiary rounded-3xl xs:py-[1em] py-[3em] xs:px-[2em] px-[5em]">
              <h2 className="text-[1.5em] xs:text-[1.2em] font-bold">Personal Information</h2>

              <div>
                <div className="flex flex-col xs:gap-[1em] gap-[4em]">
                  <div className="flex xs:flex-col justify-between xs:gap-[1em]  gap-[10em] w-full">
                    <div className="flex flex-col xs:gap-1 gap-3 basis-[50%]">
                      <h2>First Name</h2>
                      <div className="border border-border w-full  px-4 py-3 rounded-[1.5em]">
                        {userProfile.firstName}
                      </div>
                    </div>

                    <div className="flex basis-[50%] flex-col xs:gap-1 gap-3">
                      <h2>Last Name</h2>
                      <div className="border border-border w-full px-4 py-3 rounded-[1.5em]">
                        {userProfile.lastName}
                      </div>
                    </div>
                  </div>

                  <div className="flex xs:flex-col justify-between xs:gap-[1em] gap-[10em] w-full">
                    <div className="flex basis-[50%] flex-col gap-3">
                      <h2>Email Address</h2>
                      <div className="border border-border px-4 py-3 rounded-[1.5em]">
                        {userProfile.email}
                      </div>
                    </div>

                    <div className="flex flex-col basis-[50%] gap-3">
                      <h2>Phone</h2>
                      <div className="border border-border px-4 py-3 rounded-[1.5em]">
                        {userProfile.phoneNumber}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col border border-tertiary rounded-3xl xs:py-[1em] py-[2em] xs:px-[2em] px-[5em]">
              <div className="flex flex-col xs:gap-[1em] gap-[2em]">
                <h2 className="text-[1.5em] xs:text-[1.2em] font-bold">Address</h2>
                <div className="flex flex-col justify-between xs:gap-[1em] gap-[3em]">
                  <div className="flex flex-col gap-3 xs:basis-[100%] basis-[50%]">
                    <h2>State</h2>
                    <div className="border border-border xs:py-2 px-4 py-3 rounded-[1.5em] xs:w-[100%] w-[50%]">
                      {userProfile.state}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2>Delivery Address</h2>
                    <div className="border border-border xs:py-2 px-4 py-3 rounded-[1.5em] xs:w-[100%] w-[70%]">
                      {userProfile.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No user details found</div>
        )}
      </div>
    </div>
  );

};

export default MainProfile;
