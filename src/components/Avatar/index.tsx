import "./Avatar.scss";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <img
      className="avatar"
      width="50"
      height="50"
      alt="Avatar"
      src={src || "/src/assets/defaultAvatar.png"}
    />
  );
};

export default Avatar;
