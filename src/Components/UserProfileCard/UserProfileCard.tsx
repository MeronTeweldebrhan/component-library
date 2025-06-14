import type { UserProfileCardProps } from "../../types";

function UserProfileCard({
  user,
  showEmail,
  showRole,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-blue-200 max-w-xl rounded-3xl">
      <div>
        <img src={user.avatarUrl} style={{ width: "8rem" }} />
      </div>
      <h1>{user.name}</h1>
      {showEmail && <p className="text-sm text-gray-600"> {user.email}</p>}
      {showRole && <p className="text-sm text-gray-600">{user.role}</p>}
      {onEdit && 
        <button onClick={()=> onEdit(user.id)}
          className="bg-blue-300 mt-2 px-4 text-white rounded hover:bg-blue-800">
         Edit Profile</button>}

      {children}
    </div>
  );
}

export default UserProfileCard;
