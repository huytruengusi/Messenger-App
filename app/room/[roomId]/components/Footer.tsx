"use client";

import {
  HiVideoCamera,
  HiVideoCameraSlash,
  HiPhoneXMark,
} from "react-icons/hi2";
import { FaMicrophoneSlash, FaMicrophone } from "react-icons/fa";

interface FooterProps {
  micActive: boolean;
  cameraActive: boolean;
  toggleMic: () => void;
  toggleCamera: () => void;
  leaveRoom: () => void;
}

const Footer: React.FC<FooterProps> = ({
  micActive,
  cameraActive,
  toggleMic,
  toggleCamera,
  leaveRoom,
}) => {
  return (
    <div className="backdrop-opacity-10 fixed bottom-5 left-1/3">
      <div className=" flex gap-12">
        {cameraActive && (
          <div
            className="bg-purple-500 p-3 mx-7 cursor-pointer rounded-full"
            onClick={() => toggleCamera()}>
            <HiVideoCamera size={32} className="text-white" />
          </div>
        )}
        {!cameraActive && (
          <div
            className="bg-purple-500 p-3 mx-7 cursor-pointer rounded-full"
            onClick={() => toggleCamera()}>
            <HiVideoCameraSlash size={32} className="text-white" />
          </div>
        )}
        {micActive && (
          <div
            className="bg-purple-500 p-3 mx-7 cursor-pointer rounded-full"
            onClick={() => toggleMic()}>
            <FaMicrophone size={32} className="text-white" />
          </div>
        )}
        {!micActive && (
          <div
            className="bg-purple-500 p-3 mx-7 cursor-pointer rounded-full"
            onClick={() => toggleMic()}>
            <FaMicrophoneSlash size={32} className="text-white" />
          </div>
        )}
        <div
          className="bg-red-500 p-3 mx-7 cursor-pointer rounded-full"
          onClick={() => leaveRoom()}>
          <HiPhoneXMark size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
