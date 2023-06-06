"use client";

import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal, HiPhone, HiVideoCamera } from "react-icons/hi2";
import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/app/hooks/useOtherUser";
import useActiveList from "@/app/hooks/useActiveList";

import Avatar from "@/app/components/Avatar";
import AvatarGroup from "@/app/components/AvatarGroup";
import ProfileDrawer from "./ProfileDrawer";
import { useRouter } from "next/navigation";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const router = useRouter();
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.userIds.length} thành viên`;
    }

    return isActive ? "Đang hoạt động" : "Ngoại tuyến";
  }, [conversation, isActive]);

  const handleCall = useCallback(() => {
    router.push(`/room/${conversation.id}`);
  }, [conversation, router]);

  const handleVideoCall = () => {};

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        className="
            bg-white
            w-full
            flex
            border-b-[1px]
            sm:px-4
            py-3
            px-4
            lg:px-6
            justify-between
            items-center
            shadow-sm
            ">
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="
                lg:hidden
                block
                text-sky-500
                transition
                cursor-pointer
                ">
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}
          <div className="flex flex-col">
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <HiPhone
            size={32}
            onClick={() => handleCall()}
            className="text-sky-500
            cursor-pointer
            hover:text-sky-600
            transition"
          />
          <HiVideoCamera
            size={32}
            onClick={() => handleVideoCall()}
            className="text-sky-500
            cursor-pointer
            hover:text-sky-600
            transition"
          />
          <HiEllipsisHorizontal
            size={32}
            onClick={() => setDrawerOpen(true)}
            className="text-sky-500
            cursor-pointer
            hover:text-sky-600
            transition"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
