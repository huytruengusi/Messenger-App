import getConversationById from "@/app/actions/getConversationById";

import Room from "./components/Room";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface IParams {
  roomId: string;
}

const RoomId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.roomId);
  const user = await getCurrentUser();

  return (
    <div className="h-full w-full">
      <Room roomId={params.roomId} conversation={conversation!} user={user!} />
    </div>
  );
};

export default RoomId;
