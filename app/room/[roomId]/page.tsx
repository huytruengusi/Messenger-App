import getConversationById from "@/app/actions/getConversationById";

import Room from "./components/Room";
interface IParams {
  roomId: string;
}

const RoomId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.roomId);

  return (
    <div className="h-full w-full">
      <Room roomId={params.roomId} conversation={conversation!} />
    </div>
  );
};

export default RoomId;
