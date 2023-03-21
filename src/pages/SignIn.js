import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OtpInput from "react-otp-input";

function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const [otp, setOTP] = useState("");
  const [verifyOtp, setVerifyOtp] = useState(false);

  const handleSignUp = async (email) => {
    let payload = {
      email: email,
      login_type: "email",
    };

    try {
      const response = await axios.post(
        "https://devapi.happilee.io/api/v1/loginPreCheck",
        payload
      );
      if (response.data) {
        console.log(response);
        setVerifyOtp(true);
        setToken(response.data.token);
      }
      // handle the pre-check response here
    } catch (error) {
      // handle any errors that may occur
    }
  };

  const handleVerify = async (otp, token) => {
    let payload = {
      otp,
      type: "login",
    };
    try {
      const response = await axios.post(
        "https://devapi.happilee.io/api/v1/verifySignUpEmail",
        payload,
        {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      console.log(response.data);
      if (response?.data?.tokenData?.access_token) {
        localStorage.setItem(
          "token",
          `${response?.data?.tokenData?.access_token}`
        );

        navigate("/list");
      }

      // handle the pre-check response here
    } catch (error) {
      // handle any errors that may occur
    }
  };

  return (
    <div className="bg-gray-300 text-center">
      <div className="w-full bg-white  flex justify-center min-h-screen item-center">
        <div className="w-6/12 flex justify-center flex-col items-center pr-32 pl-32">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41.8675 20.8676C41.8675 25.1724 40.5641 29.1728 38.3302 32.4955L39.7059 40.677C39.806 41.272 39.2244 41.7522 38.6591 41.5413L31.5355 38.8843C28.4433 40.6964 24.8429 41.7352 20.9999 41.7352C9.47507 41.7352 0.132324 32.3925 0.132324 20.8676C0.132324 9.34275 9.47507 0 20.9999 0C32.5248 0 41.8675 9.34275 41.8675 20.8676ZM5.39197 21.8216C5.27711 20.8248 6.10131 20.0087 7.10471 20.0087C8.10811 20.0087 8.90765 20.8265 9.0565 21.8188C9.44145 24.385 10.6381 26.7791 12.4952 28.6362C14.7833 30.9244 17.8868 32.2099 21.1227 32.2099C24.3587 32.2099 27.4621 30.9244 29.7503 28.6362C31.6074 26.7791 32.804 24.385 33.189 21.8189C33.3378 20.8266 34.1374 20.0087 35.1408 20.0087C36.1442 20.0087 36.9684 20.8248 36.8535 21.8216C36.4465 25.3539 34.8588 28.6665 32.3197 31.2056C29.35 34.1752 25.3224 35.8435 21.1227 35.8435C16.9231 35.8435 12.8954 34.1752 9.92581 31.2056C7.38672 28.6665 5.79896 25.3539 5.39197 21.8216Z"
              fill="#00C5E6"
            />
          </svg>

          <h2 className="my-2 w-full">Sign In to Happilee</h2>
          <div>
            {!verifyOtp ? (
              <form
                className="text-start"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignUp(email);
                }}
              >
                {/* <label htmlFor="name">Name:</label>
     <input
       type="text"
       id="name"
       placeholder="Enter your name"
       value={name}
       onChange={(e) => setName(e.target.value)}
     /> */}

                <label className="mt-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="ml-2"
                  placeholder="Enter your email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>
                  <button
                    type="submit"
                    className="bg-[#199CD9] px-4 rounded-xl mt-4"
                    // onClick={() => {
                    // }}
                  >
                    Verify with OTP
                  </button>
                </p>
              </form>
            ) : (
              <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50">
                <div className="relative bg-white shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                  <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="font-semibold text-xl">
                        <p>OTP Verification</p>
                      </div>
                    </div>

                    <div>
                      <OtpInput
                        value={otp}
                        isInputNum
                        onChange={(otp) => setOTP(otp)}
                        numInputs={6}
                        inputStyle={`bg-gray-50 `}
                        separator={<span>-</span>}
                      />
                      <button
                        disabled={otp.length < 6 ? true : false}
                        onClick={(e) => {
                          console.log(token, "t");
                          handleVerify(otp, token);
                        }}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
