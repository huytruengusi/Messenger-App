"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import Avatar from "../Avatar";
import { HiPhone, HiXMark } from "react-icons/hi2";

interface RecipveCallModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const RecipveCallModal: React.FC<RecipveCallModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid justify-items-center">
        <Avatar />
        <h3 className="mt-3 font-bold text-2xl text-center">
          đang gọi cho bạn.
        </h3>
        <p className="mt-2 mb-5 text-sm leading-6 text-gray-600">
          Cuộc gọi sẽ bắt đầu ngay sau khi bạn chấp nhận
        </p>
        <div>
          <div className="flex gap-14">
            <div className="bg-red-500 p-3 cursor-pointer rounded-full">
              <HiXMark size={32} className="text-white" />
            </div>
            <div className="bg-green-500 p-3 cursor-pointer rounded-full">
              <HiPhone size={32} className="text-white" />
            </div>
          </div>
          <div className="flex gap-11">
            <p>Từ chối</p>
            <p>Chấp nhận</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RecipveCallModal;
