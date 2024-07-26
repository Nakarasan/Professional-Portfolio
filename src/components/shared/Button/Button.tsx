import Image from "next/image";

export interface IButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  type?: any;
  disabled?: boolean;
  image?: any;
  imageStyle?: string;
}

export default function Button(props: IButtonProps) {
  const ImageView = () => {
    return (
      <div className="flex gap-4">
        <Image
          src={props.image}
          alt={`${props.image}`}
          className={`${props.imageStyle}`}
        />
        {props.name}
      </div>
    );
  };
  return (
    <button
      type={props.type}
      className={`bg-[#7456FF] text-[14px] md:text-[16px] font-poppinsMedium px-4 md:px-6 py-[6px] md:py-2 rounded-lg tracking-wider
          ${props.className ? props.className : ""}
        `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.image ? ImageView() : props.name}
    </button>
  );
}
