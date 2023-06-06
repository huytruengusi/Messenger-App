import getConversationById from "@/app/actions/getConversationById";

import Header from "./components/Header";
import Body from "./components/Body";

interface IParams {
  roomId: string;
}

const RoomId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.roomId);

  return (
    <div className="h-full w-full">
      <Header conversation={conversation!} />
      <Body roomId={params.roomId} />
    </div>
  );
};

export default RoomId;
