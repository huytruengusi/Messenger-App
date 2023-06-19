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
    <div className="backdrop-opacity-10 fixed z-40 bottom-5 inset-x-2/4">
      <div className="flex justify-evenly gap-12">
        {cameraActive ? (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => toggleCamera()}>
            <HiVideoCamera size={24} className="text-white" />
          </div>
        ) : (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => toggleCamera()}>
            <HiVideoCameraSlash size={24} className="text-white" />
          </div>
        )}
        {micActive ? (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => toggleMic()}>
            <FaMicrophone size={24} className="text-white" />
          </div>
        ) : (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => toggleMic()}>
            <FaMicrophoneSlash size={24} className="text-white" />
          </div>
        )}
        <div
          className="bg-red-500 p-3 cursor-pointer rounded-full"
          onClick={() => leaveRoom()}>
          <HiPhoneXMark size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
