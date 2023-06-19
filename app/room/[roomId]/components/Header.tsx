"use client";

import { Conversation, User } from "@prisma/client";
import { useMemo, useState } from "react";

import useOtherUser from "@/app/hooks/useOtherUser";
import useActiveList from "@/app/hooks/useActiveList";

import Avatar from "@/app/components/Avatar";
import AvatarGroup from "@/app/components/AvatarGroup";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.userIds.length} thành viên`;
    }

    return isActive ? "Đang hoạt động" : "Ngoại tuyến";
  }, [conversation, isActive]);
  return (
    <div
      className="
            backdrop-opacity-10
            bg-white/20
            fixed
            w-full
            flex
            sm:px-4
            py-3
            px-4
            lg:px-6
            justify-between
            items-center
            shadow-sm
            ">
      <div className="flex gap-3 items-center">
        {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )}
        <div className="flex flex-col">
          <div className="text-slate-50">
            {conversation.name || otherUser.name}
          </div>
          <div className="text-sm font-light text-slate-200">{statusText}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
