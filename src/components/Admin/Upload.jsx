import { useState, useEffect } from "react";

const Upload = ({ setImageUrl }) => {
  const [loaded, setLoaded] = useState(false);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const uwScript = document.getElementById("uw");
    if (!loaded && !uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  const processResults = (error, result) => {
    if (result.event === "close") {
      setIsDisabled(false);
    }
    if (result && result.event === "success") {
      const secureUrl = result.info.secure_url;
      //   const previewUrl = secureUrl.replace('/upload/', '/upload/w_400/f_auto,q_auto/');
      //   setUploadedImage((prevImages) => [...prevImages, previewUrl]);
      setUploadedImage(secureUrl);
      setIsDisabled(false);
      setImageUrl(secureUrl); // Use the setImageUrl prop here
    }
    if (error) {
      setIsDisabled(false);
    }
  };

  //   const cloudName = import.meta.env.VITE_CLOUD_NAME;
  //   const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

  const cloudName = "dcqybedxj";
  const uploadPreset = "kcoatstyle";

  const uploadWidget = () => {
    setIsDisabled(true);
    window.cloudinary.openUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ["local", "url"],
        tags: ["kcoatstyle-products"], 
        clientAllowedFormats: ["image"],
        resourceType: "image",
        multiple: false, // Set multiple to false to allow only single file upload
      },
      processResults
    );
  };

  return (
    <div className="m-2 space-y-4">
      <button
        disabled={isDisabled}
        className="btn btn-primary text-lg font-bold border border-border px-4 py-2 rounded-lg text-tertiary hover:text-white transition-all duration-300"
        type="button"
        onClick={uploadWidget}
      >
        {isDisabled ? "Opening Widget" : "Upload Image"}
      </button>

      {uploadedImage && (
        <div className="w-full p-4">
          <img className="w-full" src={uploadedImage} alt="uploaded image" />
        </div>
      )}

      {/* {uploadedImages.length !== 0 && (
        <div className="flex flex-wrap">
          <h2 className="w-full text-xl font-bold">Uploaded images</h2>
          {uploadedImages.map((uploadedImage, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <img className="w-full" src={uploadedImage} alt="uploaded image" />
            </div>
          ))} */}
    </div>
  );
};

export default Upload;
