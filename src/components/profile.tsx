import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface ProfileProps {
    name: string;
    title: string;
}
export default function Profile({ name, title }: ProfileProps) {
  return (
    <div className="flex gap-x-2">
        <div className="flex flex-col">
            <h1 className="font-bold">{name}</h1>
            <p className="text-slate-500 text-sm">{title}</p>
        </div>
      <Avatar>
        <AvatarImage src="" alt="dev" />
        <AvatarFallback>Dev</AvatarFallback>
      </Avatar>
    </div>
  );
}
